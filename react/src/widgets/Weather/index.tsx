import React from "react";
import { WeatherIcon, WeatherWidget } from "./style";
import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher";
import { defaultWeatherSettings } from "./defaultSettings";
import { useStore } from "react-hookstore";
import { countryCodes } from "../../utils/countries";
import { calculateTemp } from "../../utils/temp";

export const Weather = () => {
    const [settings, setSettings]: [typeof defaultWeatherSettings, any] = useStore('weatherSettings');
    const [ready, setReady] = React.useState(false);

    const { data } = useSWR(
        (settings.city && settings.country) ? `https://compass-api.vercel.app/weather/${settings.city},${settings.country}` : ``, 
        fetcher
    )

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("weatherSettings") ? JSON.parse(localStorage.getItem("weatherSettings") || "") : defaultWeatherSettings);
            setReady(true);
        })
    }, [settings])

    if(ready && !settings.setup) return <WeatherWidget className={settings.position}>
        <WeatherIcon icon={require("../../assets/weather/cloud.svg")} />
        <h1>-</h1>
        <p>Weather not set-up yet.</p>
    </WeatherWidget> 
    if (!data) return <></>
    if (data && !data.main) return <WeatherWidget className={settings.position}>
        <p>Failed to get weather.</p>
    </WeatherWidget>

    return (
        <WeatherWidget className={settings.position}>
            <WeatherIcon icon={require("../../assets/weather/cloud.svg")} />
            <h1>{calculateTemp(data.main.temp, settings.useFahrenheit)}°{settings.useFahrenheit ? `F` : `C`}</h1>
            <p>{data.name ? data.name : settings.city}, {(data.sys.country && countryCodes[data.sys.country]) ? countryCodes[data.sys.country] : settings.country}</p>
        </WeatherWidget>
    )
}