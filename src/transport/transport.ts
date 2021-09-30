type Arguments = Record<string, any>;
type Headers = Record<string, string>;

export default interface Transport {
  request<T = any>(args: Arguments, headers?: Headers): Promise<T>;
}
