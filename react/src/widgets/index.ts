import { defaultDATSettings } from "./Time/defaultSettings";
import { defaultWeatherSettings } from "./Weather/defaultSettings";

export const widgets = [
    {
        name: "Date & Time",
        settings: {
            name: "datetimeSettings",
            initial: defaultDATSettings
        }
    },
    {
        name: "Weather",
        settings: {
            name: "weatherSettings",
            initial: defaultWeatherSettings
        }
    },
    {
        name: "Background",
        settings: {
            name: "backgroundSettings",
            initial: {
                provider: "unsplash",
                colour: ""
            }
        }
    }
]