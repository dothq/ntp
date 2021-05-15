// This module requires web extension types to function
/// <reference types="web-ext-types"/>

import React from 'react';

import style from './styles.module.css';

const SearchDisplay = ({ searchCall }) => (
  <form onSubmit={searchCall} style={{ width: '100%' }} action="https://duckduckgo.com/">
    <input
      type="text"
      name="q"
      id="search"
      placeholder="Search"
      autoFocus={true}
      className={style.searchField}
      onLoad={() =>
        setTimeout(() => document.getElementById('search')?.focus(), 50)
      }
    />
  </form>
);

export const Search = () => {
  const [tabID, setTabID] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', async () => {
      if (typeof browser != 'undefined') {
        const tab = await browser.tabs.getCurrent();
        setTabID(tab.id || 0);
      }
    });
  });

  if (typeof browser == 'undefined') {
    // This is not inside a browser extension and thus top sites cannot be used
    return (
      <SearchDisplay
        searchCall={() => {
          const target = document.getElementById('search');
          window.location.href = `https://duckduckgo.com/?q=${target.value}`;
          return false;
        }}
      />
    );
  } else {
    // If the browser sites haven't loaded in yet, return something
    // blank to ensure that rendering plays nices
    if (!tabID) return <div></div>;

    return (
      <SearchDisplay
        searchCall={() => {
          const target = document.getElementById('search') as HTMLInputElement;
          browser.search.search({ query: target.value || '', tabId: tabID });
          return false;
        }}
      />
    );
  }
};
