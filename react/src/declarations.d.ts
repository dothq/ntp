declare module '*.png' {
  const value: any;
  export default value;
}

declare module '@dannyman/use-store';

declare namespace browser.search {
  async function get(): Promise<
    { name: string; isDefault: boolean; alias?: string; favIconUrl?: string }[]
  >;
  async function search(searchProperties: {
    query: string;
    engine?: string;
    tabId?: number;
  });
}
