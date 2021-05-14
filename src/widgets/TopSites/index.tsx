// This module requires web extension types to function
/// <reference types="web-ext-types"/>

import React from 'react';
import { useStore } from 'react-hookstore';
import { Search } from '../Search';

import { defaultTopSiteSettings } from './defaultSettings';
import { defaultTopSites, TopSitesItems } from './defaultSites';

import style from './styles.module.css';

const TopSitesDisplay = ({ sites }) => (
  <div className={style.container}>
    <Search />

    <div className={style.sites}>
      {sites.map((site, i) => (
        <div
          onClick={() => (location.href = site.url)}
          key={i}
          className={style.site}
        >
          <img src={site.favicon} alt={site.name} />
        </div>
      ))}
    </div>
  </div>
);

export const TopSites = () => {
  const [settings, setSettings]: [
    typeof defaultTopSiteSettings,
    any
  ] = useStore('topSitesSettings');
  const [ready, setReady] = React.useState(false);
  const [data, setData] = React.useState([] as TopSitesItems);

  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', async () => {
      setSettings(
        localStorage.getItem('topSitesSettings')
          ? JSON.parse(localStorage.getItem('topSitesSettings') || '')
          : defaultTopSiteSettings
      );

      if (typeof browser != 'undefined') {
        const sites = await browser.topSites.get({
          includeFavicon: true
        });
        setData((sites as unknown) as TopSitesItems);
      }

      setReady(true);
    });
  }, [settings]);

  if (typeof browser == 'undefined') {
    // This is not inside a browser extension and thus top sites cannot be used
    return <TopSitesDisplay sites={defaultTopSites} />;
  } else {
    // If the browser sites haven't loaded in yet, return something
    // blank to ensure that rendering plays nices
    if (!data) return <div></div>;

    return (
      <TopSitesDisplay
        sites={data.filter((site) => site.favicon).splice(0, settings.limit)}
      />
    );
  }
};
