import Transport from '../../src/transport/transport';

const torrents = {};

const mockEndpoints = {
  'torrent-add': (args: Record<string, any>) => {
    const {filename} = args.arguments;

    if (torrents[filename]) {
      return {
        'torrent-duplicate': {
          hashString: 'hash',
          id: 1,
          name: 'test-name'
        }
      }
    }
    torrents[filename] = 1;
    return {
      'torrent-added': {
        hashString: 'hash',
        id: 1,
        name: 'test-name'
      }
    }
  },
};


export class MockTransport implements Transport {
  request<T = any>(args: Record<string, any>, headers?: Record<string, string>): Promise<T> {
    if (args['method'] && mockEndpoints[args['method']]) {
      return Promise.resolve(mockEndpoints[args['method']](args));
    }
    return Promise.resolve(undefined);
  }
}

