/**
 * @see https://github.com/transmission/transmission/blob/master/extras/rpc-spec.txt#L592-L623
 **/
export interface SessionStats {
  activeTorrentCount: number,
  'cumulative-stats': {
    downloadedBytes: number,
    filesAdded: number,
    secondsActive: number,
    sessionCount: number,
    uploadedBytes: number
  },
  'current-stats': {
    downloadedBytes: number,
    filesAdded: number,
    secondsActive: number,
    sessionCount: number,
    uploadedBytes: number
  },
  downloadSpeed: number,
  pausedTorrentCount: number,
  torrentCount: number,
  uploadSpeed: number
}

/**
 * @see https://github.com/transmission/transmission/blob/master/extras/rpc-spec.txt#L506-L576
 **/
export enum SessionFields {
  'alt-speed-down' = 'alt-speed-down',
  'alt-speed-enabled' = 'alt-speed-enabled',
  'alt-speed-time-begin' = 'alt-speed-time-begin',
  'alt-speed-time-enabled' = 'alt-speed-time-enabled',
  'alt-speed-time-end' = 'alt-speed-time-end',
  'alt-speed-time-day' = 'alt-speed-time-day',
  'alt-speed-up' = 'alt-speed-up',
  'blocklist-url' = 'blocklist-url',
  'blocklist-enabled' = 'blocklist-enabled',
  'blocklist-size' = 'blocklist-size',
  'cache-size-mb' = 'cache-size-mb',
  'config-dir' = 'config-dir',
  'download-dir' = 'download-dir',
  'download-queue-size' = 'download-queue-size',
  'download-queue-enabled' = 'download-queue-enabled',
  'dht-enabled' = 'dht-enabled',
  'encryption' = 'encryption',
  'idle-seeding-limit' = 'idle-seeding-limit',
  'idle-seeding-limit-enabled' = 'idle-seeding-limit-enabled',
  'incomplete-dir' = 'incomplete-dir',
  'incomplete-dir-enabled' = 'incomplete-dir-enabled',
  'lpd-enabled' = 'lpd-enabled',
  'peer-limit-global' = 'peer-limit-global',
  'peer-limit-per-torrent' = 'peer-limit-per-torrent',
  'pex-enabled' = 'pex-enabled',
  'peer-port' = 'peer-port',
  'peer-port-random-on-start' = 'peer-port-random-on-start',
  'port-forwarding-enabled' = 'port-forwarding-enabled',
  'queue-stalled-enabled' = 'queue-stalled-enabled',
  'queue-stalled-minutes' = 'queue-stalled-minutes',
  'rename-partial-files' = 'rename-partial-files',
  'rpc-version' = 'rpc-version',
  'rpc-version-minimum' = 'rpc-version-minimum',
  'script-torrent-done-filename' = 'script-torrent-done-filename',
  'script-torrent-done-enabled' = 'script-torrent-done-enabled',
  'seedRatioLimit' = 'seedRatioLimit',
  'seedRatioLimited' = 'seedRatioLimited',
  'seed-queue-size' = 'seed-queue-size',
  'seed-queue-enabled' = 'seed-queue-enabled',
  'speed-limit-down' = 'speed-limit-down',
  'speed-limit-down-enabled' = 'speed-limit-down-enabled',
  'speed-limit-up' = 'speed-limit-up',
  'speed-limit-up-enabled' = 'speed-limit-up-enabled',
  'start-added-torrents' = 'start-added-torrents',
  'trash-original-torrent-files' = 'trash-original-torrent-files',
  'units' = 'units',
  'utp-enabled' = 'utp-enabled',
  'version' = 'version',
}

/**
 * @see https://github.com/transmission/transmission/blob/master/extras/rpc-spec.txt#L506-L576
 **/
export interface Session {
  'alt-speed-down': number;
  'alt-speed-enabled': boolean;
  'alt-speed-time-begin': number;
  'alt-speed-time-enabled': boolean;
  'alt-speed-time-end': number;
  'alt-speed-time-day': number;
  'alt-speed-up': number;
  'blocklist-url': string;
  'blocklist-enabled': boolean;
  'blocklist-size': number;
  'cache-size-mb': number;
  'config-dir': string;
  'download-dir': string;
  'download-queue-size': number;
  'download-queue-enabled': boolean;
  'dht-enabled': boolean;
  'encryption': string;
  'idle-seeding-limit': number;
  'idle-seeding-limit-enabled': boolean;
  'incomplete-dir': string;
  'incomplete-dir-enabled': boolean;
  'lpd-enabled': boolean;
  'peer-limit-global': number;
  'peer-limit-per-torrent': number;
  'pex-enabled': boolean;
  'peer-port': number;
  'peer-port-random-on-start': boolean;
  'port-forwarding-enabled': boolean;
  'queue-stalled-enabled': boolean;
  'queue-stalled-minutes': number;
  'rename-partial-files': boolean;
  'rpc-version': number;
  'rpc-version-minimum': number;
  'script-torrent-done-filename': string;
  'script-torrent-done-enabled': boolean;
  'seedRatioLimit': number;
  'seedRatioLimited': boolean;
  'seed-queue-size': number;
  'seed-queue-enabled': boolean;
  'speed-limit-down': number;
  'speed-limit-down-enabled': boolean;
  'speed-limit-up': number;
  'speed-limit-up-enabled': boolean;
  'start-added-torrents': boolean;
  'trash-original-torrent-files': boolean;
  'units': object;
  'utp-enabled': boolean;
  'version': string;
}