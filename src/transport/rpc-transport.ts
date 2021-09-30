import * as bent from 'bent';
import { BentResponse, Json, StatusError } from 'bent';
import Transport from './transport';


export class ApiError extends Error {
  statusCode: number;
  text: () => Promise<string>;
  headers: Record<string, string>;

  constructor(res: bent.BentResponse, message?: string) {
    super(message);
    this.name = 'ApiError';
    this.message = message;
    this.statusCode = res.statusCode;
    this.text = res.text;
    this.headers = <Record<string, string>>res.headers;
  }
}

export default class RpcTransport implements Transport {
  protected _request: bent.RequestFunction<bent.ValidResponse>;
  protected csrf?: string;

  constructor(
    protected readonly host: string,
    protected readonly port: number,
  ) {
    this._request = bent(`${host}:${port}`, 'POST', 'json', 200);
  }

  async request<R>(args, headers = {}): Promise<R> {
    if (this.csrf) {
      headers = { ...headers, 'x-transmission-session-id': this.csrf };
    }
    return this._request('/transmission/rpc', args, headers)
      .then((res: BentResponse) => {
        if (res['result'] !== 'success') {
          throw new ApiError(res, 'Error ' + res['result']);
        }
        return res['arguments'];
      }, (err) => {
        if (err.statusCode === 409 && err.headers['x-transmission-session-id']) {
          this.csrf = err.headers['x-transmission-session-id'];
          return this.request(args);
        }
        throw err;
      });
  }
}