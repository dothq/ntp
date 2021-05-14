import React from 'react';
import { render } from 'react-dom';

import { App } from './components/App';
import { Settings } from './store';

console.time('start load');

new Settings();

render(<App />, document.getElementById('dot-ntp'));
