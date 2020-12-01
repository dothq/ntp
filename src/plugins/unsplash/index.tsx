import { getBackground } from "./background";
import localforage from 'localforage';

localforage.config({
    name: 'compass',
    version: 1.0,
    storeName: 'compass-ntp',
});

export const unsplashPlugin = {
    name: "Unsplash",
    author: "Kieran <kieran@dothq.co>",
    api: {
        getBackground
    }
}