import React from "react";
import { getTime } from "../../utils/time";
import { TimeWidget } from "../../widgets/Time/style";
import { StyledDAT, DATPreview, CheckboxParent } from "./style";
import { Checkbox } from "@material-ui/core";
import { defaultDATSettings } from "../../widgets/Time/defaultSettings";
import useLocalState from '@phntms/use-local-state';
import { useStore } from "react-hookstore";

export const DAT = () => {
    const [time, setTime] = React.useState("");
    const [date, setDate] = React.useState("");

    const [settings, setSettings]: [typeof defaultDATSettings, any] = useStore('datetimeSettings');

    let timeInterval: any;

    const onTFHChange = () => {
        setSettings({ ...settings, twentyFourHour: !settings.twentyFourHour })
    }

    const onShowSecondsChange = () => {
        setSettings({ ...settings, showSeconds: !settings.showSeconds })
    }

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("datetimeSettings") ? JSON.parse(localStorage.getItem("datetimeSettings") || "") : defaultDATSettings);
        })

        timeInterval = setInterval(() => {
            setTime(getTime(settings.showSeconds, settings.twentyFourHour))
        }, 1)

        return () => clearInterval(timeInterval);
    }, [settings])

    return (
        <StyledDAT style={{ paddingRight: "50px" }}>
            <DATPreview>
                <TimeWidget>
                    <h1>{time}</h1>
                    <p>{date}</p>
                </TimeWidget>
            </DATPreview>

            <CheckboxParent>
                <span onClick={() => onTFHChange()}>Use 24-hour time</span>
                <Checkbox 
                    color={"primary"} 
                    disableRipple 
                    disableFocusRipple 
                    checked={settings.twentyFourHour} 
                    onChange={() => onTFHChange()}
                />
            </CheckboxParent>

            <CheckboxParent>
                <span onClick={() => onShowSecondsChange()}>Show seconds</span>
                <Checkbox 
                    color={"primary"} 
                    disableRipple 
                    disableFocusRipple 
                    checked={settings.showSeconds} 
                    onChange={() => onShowSecondsChange()}
                />
            </CheckboxParent>
        </StyledDAT>
    )
}