import React from "react"

import '../../reset.css';
import '../../positions.css';
import { NTP, OpenSettings } from "./style";

import backgrounds from "../../backgrounds.json";
import { Time } from "../../widgets/Time";
import { Weather } from "../../widgets/Weather";
import { Settings } from "../Settings";
import { SettingsHeader, Title, Close } from "../Settings/style";

import { ThemeProvider } from "@material-ui/core"
import { theme } from "../../theme";
import { useStore } from "react-hookstore";

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

export const App = () => {
    const [settings, setSettings]: [{ provider: string, colour?: string }, any] = useStore('backgroundSettings');

    const [ready, setReady] = React.useState(false);
    const [settingsReady, setSettingsReady] = React.useState(false);
    const [settingsVisible, onSettingsClick] = React.useState(false);

    const [src, setSrc] = React.useState(
        settings.provider == "unsplash" 
            ? `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 53.65%, rgba(0, 0, 0, 0.35) 100%)`
            : settings.colour || "#2554e1"
    );

    if(settingsReady && settings.provider == "unsplash") {
        const img = new Image();
        img.src = `backgrounds/unsplash/${background.id}.jpeg`;
        img.addEventListener("load", () => {
            setReady(true);
        })
    }

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("backgroundSettings") ? JSON.parse(localStorage.getItem("backgroundSettings") || "") : {
                provider: "unsplash",
                colour: ""
            });
            setSettingsReady(true);
            console.timeEnd("start load")
        })

        setSrc(
            settingsReady && settings.provider == "unsplash" 
                ? `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 53.65%, rgba(0, 0, 0, 0.35) 100%), url(backgrounds/unsplash/${background.id}.jpeg)`
                : settings.colour || "#2554e1"
        )
        if(settingsReady && settings.provider !== "unsplash") setReady(true);
    }, [settings, settingsReady])

    const onSettingsClose = () => {
        onSettingsClick(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <NTP provider={settings.provider} backgroundSrc={src} ready={ready} style={{ "--ntp-bg": src }}>
                <Time />
                <Weather />
                <OpenSettings className={"top-right"} onClick={() => onSettingsClick(!settingsVisible)} />
            </NTP>
            <Settings visible={settingsVisible} settingsClose={onSettingsClose} />
        </ThemeProvider>
    )
}