import Transport from './transport/transport';
import { Session, SessionStats } from './types/session';


export default class SessionApi {
  constructor(protected readonly client: Transport) {
  }

  stats(): Promise<SessionStats> {
    return this.client.request({ method: 'session-stats' });
  }

  getSession(): Promise<Session> {
    return this.client.request({ method: 'session-get' });
  }
}
