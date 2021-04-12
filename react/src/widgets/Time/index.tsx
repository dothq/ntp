import React from "react";
import { usePersistedState } from '@dannyman/use-store';
import { getTime } from "../../utils/time";
import { TimeWidget } from "./style";
import { format } from 'fecha';
import { defaultDATSettings } from "./defaultSettings";
import useLocalState from '@phntms/use-local-state';
import { useStore } from "react-hookstore";

export const Time = () => {
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState("");

    const [settings, setSettings]: [typeof defaultDATSettings, any] = useStore('datetimeSettings');
    
    let timeInterval: any;

    const tick = () => {
        const t = getTime(settings.showSeconds, settings.twentyFourHour);
        const d = format(new Date(), settings.dateFormat)

        setTime(t);
        setDate(d);
    }

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("datetimeSettings") ? JSON.parse(localStorage.getItem("datetimeSettings") || "") : defaultDATSettings);
        })
        
        tick()

        timeInterval = setInterval(tick, 1)

        return () => clearInterval(timeInterval);
    }, [settings])

    return (
        <TimeWidget>
            <h1>{time}</h1>
            <p>{date}</p>
        </TimeWidget>
    )
}