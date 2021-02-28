import React, { useState } from 'react';

import { StyledApp } from '../../style';

import widgets from '../../widgets';

import { Widget } from '../Widget';

import Settings from '../Settings';

export const App = () => {
  const [openSettings, setOpenSettings] = useState({});
  return (
    <StyledApp>
      {Object.entries(widgets).map(([id, w]) => (
        <Widget
          ag={setOpenSettings}
          id={id}
          key={id}
          defaultSlot={w.defaultPosition}
        >
          <w.component />
        </Widget>
      ))}
      <Settings a={openSettings} ac={setOpenSettings}></Settings>
    </StyledApp>
  );
};
