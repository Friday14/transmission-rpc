export enum TorrentStatus {
  Stopped,
  QueuedToCheckFiles,
  CheckingFiles,
  QueuedToDownload,
  Downloading,
  QueuedToSeed,
  Seeding
}

export enum TorrentFields {
  activityDate = 'activityDate',
  addedDate = 'addedDate',
  bandwidthPriority = 'bandwidthPriority',
  comment = 'comment',
  corruptEver = 'corruptEver',
  creator = 'creator',
  dateCreated = 'dateCreated',
  desiredAvailable = 'desiredAvailable',
  doneDate = 'doneDate',
  downloadDir = 'downloadDir',
  downloadedEver = 'downloadedEver',
  downloadLimit = 'downloadLimit',
  downloadLimited = 'downloadLimited',
  editDate = 'editDate',
  error = 'error',
  errorString = 'errorString',
  eta = 'eta',
  etaIdle = 'etaIdle',
  fileCount = 'count',
  files = 'files',
  fileStats = 'fileStats',
  hashString = 'hashString',
  haveUnchecked = 'haveUnchecked',
  haveValid = 'haveValid',
  honorsSessionLimits = 'honorsSessionLimits',
  id = 'id',
  isFinished = 'isFinished',
  isPrivate = 'isPrivate',
  isStalled = 'isStalled',
  labels = 'labels',
  leftUntilDone = 'leftUntilDone',
  magnetLink = 'magnetLink',
  manualAnnounceTime = 'manualAnnounceTime',
  maxConnectedPeers = 'maxConnectedPeers',
  metadataPercentComplete = 'metadataPercentComplete',
  name = 'name',
  peerLimit = 'limit',
  peers = 'peers',
  peersConnected = 'peersConnected',
  peersFrom = 'peersFrom',
  peersGettingFromUs = 'peersGettingFromUs',
  peersSendingToUs = 'peersSendingToUs',
  percentDone = 'percentDone',
  pieces = 'pieces',
  pieceCount = 'pieceCount',
  pieceSize = 'pieceSize',
  priorities = 'priorities',
  primaryMimeType = 'type',
  queuePosition = 'queuePosition',
  rateDownload = 'rateDownload (B/s)',
  rateUpload = 'rateUpload (B/s)',
  recheckProgress = 'recheckProgress',
  secondsDownloading = 'secondsDownloading',
  secondsSeeding = 'secondsSeeding',
  seedIdleLimit = 'seedIdleLimit',
  seedIdleMode = 'seedIdleMode',
  seedRatioLimit = 'seedRatioLimit',
  seedRatioMode = 'seedRatioMode',
  sizeWhenDone = 'sizeWhenDone',
  startDate = 'startDate',
  status = 'status',
  trackers = 'trackers',
  trackerStats = 'trackerStats',
  totalSize = 'totalSize',
  torrentFile = 'torrentFile',
  uploadedEver = 'uploadedEver',
  uploadLimit = 'uploadLimit',
  uploadLimited = 'uploadLimited',
  uploadRatio = 'uploadRatio',
  wanted = 'wanted',
  webseeds = 'webseeds',
  webseedsSendingToUs = 'webseedsSendingToUs',
}

export interface Torrent {
  activityDate?: number;
  addedDate?: number;
  bandwidthPriority?: number;
  comment?: number;
  corruptEver?: number;
  creator?: string;
  dateCreated?: number;
  desiredAvailable?: number;
  doneDate?: number;
  downloadDir?: string;
  downloadedEver?: number;
  downloadLimit?: number;
  downloadLimited?: boolean;
  editDate?: number;
  error?: number;
  errorString?: string;
  eta?: number;
  etaIdle?: number;
  'file-count'?: number;
  files?: TorrentFile[];
  fileStats?: TorrentFileStat[];
  hashString?: string;
  haveUnchecked?: number;
  haveValid?: number;
  honorsSessionLimits?: boolean;
  id?: number;
  isFinished?: boolean;
  isPrivate?: boolean;
  isStalled?: boolean;
  labels?: Array<{ label: string }>;
  leftUntilDone?: number;
  magnetLink?: string;
  manualAnnounceTime?: number;
  maxConnectedPeers?: number;
  metadataPercentComplete?: number;
  name?: string;
  'peer-limit'?: number;
  peers?: Peer[];
  peersConnected?: number;
  peersFrom?: object;
  peersGettingFromUs?: number;
  peersSendingToUs?: number;
  percentDone?: number;
  pieces?: string;
  pieceCount?: number;
  pieceSize?: number;
  priorities?: any[];
  'primary-mime-type'?: string;
  queuePosition?: number;
  'rateDownload(B/s)'?: number;
  'rateUpload(B/s)'?: number;
  recheckProgress?: number;
  secondsDownloading?: number;
  secondsSeeding?: number;
  seedIdleLimit?: number;
  seedIdleMode?: number;
  seedRatioLimit?: number;
  seedRatioMode?: number;
  sizeWhenDone?: number;
  startDate?: number;
  status?: TorrentStatus;
  trackers?: any[];
  trackerStats?: any[];
  totalSize?: number;
  torrentFile?: string;
  uploadedEver?: number;
  uploadLimit?: number;
  uploadLimited?: boolean;
  uploadRatio?: number;
  wanted?: any[];
  webseeds?: any[];
}


export interface TorrentFile {
  bytesCompleted: number;
  length: number;
  name: string;
}

export interface TorrentFileStat {
  bytesCompleted: number;
  wanted: boolean;
  priority: number;
}

export interface Peer {
  address: string;
  clientName: string;
  clientIsChoked: boolean;
  clientIsInterested: boolean;
  flagStr: string;
  isDownloadingFrom: boolean;
  isEncrypted: boolean;
  isIncoming: boolean;
  isUploadingTo: boolean;
  isUTP: boolean;
  peerIsChoked: boolean;
  peerIsInterested: boolean;
  port: number;
  progress: number;
  'rateToClient (B/s)': number;
  'rateToPeer (B/s)': number;
}