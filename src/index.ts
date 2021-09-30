import SessionApi from './session-api';
import TorrentApi from './torrent-api';
import Transport from './transport/transport';

export default class Transmission {
  public readonly session: SessionApi;
  public readonly torrent: TorrentApi;

  constructor(protected readonly transport: Transport) {
    this.session = new SessionApi(transport);
    this.torrent = new TorrentApi(transport);
  }
}

export {
  SessionApi,
  TorrentApi,
};