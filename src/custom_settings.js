
const MODE = 'links';

const DEFAULT_SETTINGS = {
    zipped: MODE == 'photos',
    flatten: false,
    generateLinks: MODE == 'links',
    generateLog: false,
    skipDuplicates: false,
    skipDownload: MODE == 'links',
    verifyBunkrLinks: false,
    output: [],
}

const HostConfig = {
  'Simpcity': { enabled: MODE == 'links' },
  'JPGX': { enabled: MODE == 'photos' || MODE == 'links' },
  'turbo': { enabled: MODE == 'videos' || MODE == 'links'},

  'Coomer': { enabled: false },
  'kemono': { enabled: false },
  'Postimg': { enabled: false },
  'Ibb': { enabled: false },
  'Imagevenue': { enabled: false },
  'Imgvb': { enabled: false },
  'Imgbox': { enabled: false },
  'Onlyfans': { enabled: false },
  'Reddit': { enabled: false },
  'Pomf2': { enabled: false },
  'Nitter': { enabled: false },
  'Twitter': { enabled: false },
  'Pixhost': { enabled: false },
  'Imagebam': { enabled: false },
  'Redgifs': { enabled: false },
  'Bunkr': { enabled: false },
  'Give.xxx': { enabled: false },
  'Pixeldrain': { enabled: MODE == 'links' },
  'Gofile': { enabled: MODE == 'links' },
  'Box.com': { enabled: false },
  'Yandex': { enabled: false },
  'Cyberfile': { enabled: false },
  'Pornhub': { enabled: false },
  'Noodlemagazine': { enabled: false },
  'Spankbang': { enabled: false },
};