import { createStore } from 'react-hookstore';
import { widgets } from './widgets';

export class Settings {
  constructor() {
    widgets.forEach((widget) => {
      const store: any = createStore(
        widget.settings.name,
        widget.settings.initial
      );

      store.subscribe((state: any) => {
        const data = localStorage.getItem(widget.settings.name) || '';

        localStorage.setItem(widget.settings.name, JSON.stringify(state));
        console.log(
          '[SettingsSubscriber]',
          `${widget.settings.name} has been changed.`,
          state
        );
      });

      console.log(
        '[Settings]',
        `Started store with name ${widget.settings.name}.`
      );
    });
  }
}
