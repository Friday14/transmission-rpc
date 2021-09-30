import { MockTransport } from '../test/__mock__/transport';
import { TorrentApi } from './torrent-api';

describe('Torrent Api', () => {
  const transport = new MockTransport();
  const torrentApi = new TorrentApi(transport);

  describe('call addTorrent', () => {
    it('should isDuplicate false', async () => {
      const resp = await torrentApi.addTorrent({
        filename: 'magnet://test',
        'download-dir': './home',
      });
      expect(resp.isDuplicate).toBe(false);

      const resp2 = await torrentApi.addTorrent({
        filename: 'magnet://test2',
        'download-dir': './home',
      });
      expect(resp2.isDuplicate).toBe(false);
    });

    it('should isDuplicate true', async () => {
      const resp = await torrentApi.addTorrent({
        filename: 'magnet://test',
        'download-dir': './home',
      });
      expect(resp.isDuplicate).toBe(true);

      const resp2 = await torrentApi.addTorrent({
        filename: 'magnet://test2',
        'download-dir': './home',
      });
      expect(resp2.isDuplicate).toBe(true);
    })
  });
});