export type TopSitesItems = { favicon?: string; title: string; url: string }[];

export const defaultTopSites = [
  {
    favicon:
      'https://github.com/dothq/browser-desktop/raw/nightly/common/browser/branding/dot/default64.png',
    title: 'Dot HQ',
    url: 'https://dothq.co'
  },
  {
    favicon: 'https://duckduckgo.com/assets/common/dax-logo.svg',
    title: 'DuckDuckGo',
    url: 'https://duckduckgo.com/about'
  },
  {
    favicon: 'https://github.githubassets.com/pinned-octocat.svg',
    title: 'GitHub',
    url: 'https://github.com'
  },
  {
    favicon: 'https://static.figma.com/app/icon/1/favicon.svg',
    title: 'Figma',
    url: 'https://figma.com/'
  }
];
