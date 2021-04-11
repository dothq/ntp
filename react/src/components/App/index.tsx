import React from "react"

import '../../reset.css';
import '../../positions.css';
import { NTP, OpenSettings } from "./style";

import backgrounds from "../../backgrounds.json";
import { Time } from "../../widgets/Time";
import { Weather } from "../../widgets/Weather";
import { Settings } from "../Settings";
import { SettingsHeader, Title, Close } from "../Settings/style";

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

export const App = () => {
    const [ready, setReady] = React.useState(false);
    const [settingsVisible, onSettingsClick] = React.useState(false);

    const img = new Image();
    img.src = `backgrounds/unsplash/${background.id}.jpeg`;
    img.addEventListener("load", () => {
        setReady(true);
    })

    return (
        <>
            <NTP backgroundSrc={background.id} ready={ready}>
                <Time />
                <Weather />
                <OpenSettings className={"top-right"} onClick={() => onSettingsClick(!settingsVisible)} />
            </NTP>
            <Settings visible={settingsVisible}>
                <SettingsHeader>
                    <Title>
                        Settings
                    </Title>

                    <Close onClick={() => onSettingsClick(false)} />
                </SettingsHeader>
            </Settings>
        </>
    )
}