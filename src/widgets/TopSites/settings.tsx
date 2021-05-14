import { TextField } from '@material-ui/core';
import React from 'react';
import { useStore } from 'react-hookstore';
import { defaultTopSiteSettings } from './defaultSettings';
import { CheckboxParent } from './settingsStyles';

export const TopSitesSettings = () => {
  const [settings, setSettings]: [
    typeof defaultTopSiteSettings,
    any
  ] = useStore('topSitesSettings');
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setSettings(
        localStorage.getItem('topSitesSettings')
          ? JSON.parse(localStorage.getItem('topSitesSettings') || '')
          : defaultTopSiteSettings
      );
      setReady(true);
    });
  }, [settings]);

  return (
    <div style={{ paddingRight: 50 }}>
      <CheckboxParent>
        <span>Number of sites</span>
        <TextField
          value={settings.limit || 0}
          placeholder={'Count'}
          variant="outlined"
          size="small"
          type="number"
          onChange={(e: any) => {
            setSettings({ ...settings, limit: e.target.value });
          }}
        />
      </CheckboxParent>
    </div>
  );
};
