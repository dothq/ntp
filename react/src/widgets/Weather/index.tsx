import React from "react";
import useLocalStorage from 'use-local-storage-state'
import { WeatherIcon, WeatherWidget } from "./style";
import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher";
import { defaultWeatherSettings } from "./defaultSettings";
import { useStore } from "react-hookstore";

export const Weather = () => {
    const [settings, setSettings]: [typeof defaultWeatherSettings, any] = useStore('weatherSettings');

    const { data } = useSWR(
        `https://compass-api.vercel.app/weather/${settings.city},${settings.country}`, 
        fetcher
    )

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("weatherSettings") ? JSON.parse(localStorage.getItem("weatherSettings") || "") : defaultWeatherSettings);
        })
    }, [settings])

    if (!data) return <></>

    return (
        <WeatherWidget className={settings.position}>
            <WeatherIcon icon={require("../../assets/weather/cloud.svg")} />
            <h1>{Math.floor(data.main.temp - 273.15)}°C </h1>
            <p>{settings.city}, {settings.country}</p>
        </WeatherWidget>
    )
}