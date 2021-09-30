import Transport from './transport/transport';
import { Torrent, TorrentFields } from './types/torrent';


type GetTorrentsArguments = {
  fields: TorrentFields[]
  ids?: number[]|number|'recently-active';
}

type AddTorrentArguments = {
  filename: string;
  'download-dir': string;
  paused?: boolean;
}

type AddTorrentResponse = {
  hashString: string,
  id: number,
  name: string,
  isDuplicate: boolean;
}

type ChangeTorrentArguments = {
  downloadLimit?: number;       // maximum download speed (KBps)
  downloadLimited?: boolean;    // true if "downloadLimit" is honored
  uploadLimit?: number;         // maximum upload speed (KBps)
  uploadLimited?: number;       // maximum upload speed (KBps)
  'files-wanted': string[];     // indices of file(s) to download
  'files-unwanted': string[];   // indices of file(s) to not download
  ids: number[];
  labels: string[];
}


type TorrentId = number;

export default class TorrentApi {
  constructor(protected readonly client: Transport) {
  }

  getTorrents(args: GetTorrentsArguments): Promise<Torrent[]> {
    return this.client.request({
      method: 'torrent-get',
      arguments: args,
    }).then((response) => response.torrents);
  }

  async addTorrent(args: AddTorrentArguments): Promise<AddTorrentResponse> {
    const response = await this.client.request({
      method: 'torrent-add',
      arguments: args,
    });
    const torrent: AddTorrentResponse = response['torrent-added'] || response['torrent-duplicate'];
    torrent.isDuplicate = Boolean(response['torrent-duplicate']);
    return torrent;
  }

  startTorrent(ids: TorrentId | TorrentId[]) {
    return this.client.request({
      method: 'torrent-start',
      arguments: {
        ids: ids,
      },
    });
  }

  stopTorrent(ids: TorrentId | TorrentId[]) {
    return this.client.request({
      method: 'torrent-stop',
      arguments: {
        ids: ids,
      },
    });
  }

  verifyTorrent(ids: TorrentId | TorrentId[]) {
    return this.client.request({
      method: 'torrent-verify',
      arguments: {
        ids: ids,
      },
    });
  }

  changeTorrent(args: ChangeTorrentArguments) {
    return this.client.request({
      method: 'torrent-set',
      arguments: args,
    });
  }

  removeTorrent(torrentId: number, deleteLocalData: boolean = false) {
    return this.client.request({
      method: 'torrent-remove',
      arguments: {
        ids: [torrentId],
        'delete-local-data': deleteLocalData,
      },
    });
  }

  async removeAllTorrent(deleteLocalData: boolean = false) {
    const torrents = await this.getTorrents({ fields: [TorrentFields.id] });
    const ids = torrents.map((t) => t.id);

    return this.client.request({
      method: 'torrent-remove',
      arguments: {
        ids: ids,
        'delete-local-data': deleteLocalData,
      },
    });
  }
}
