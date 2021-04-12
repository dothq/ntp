import React from "react";
import { getTime } from "../../utils/time";
import { TimeWidget } from "../../widgets/Time/style";
import { StyledDAT, DATPreview, CheckboxParent } from "./style";
import { Checkbox, TextField } from "@material-ui/core";
import { defaultDATSettings } from "../../widgets/Time/defaultSettings";
import { useStore } from "react-hookstore";
import { format } from "fecha";

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

    const onDateFormatChange = (newValue: string) => {
        setSettings({ ...settings, dateFormat: newValue })
    }

    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            setSettings(localStorage.getItem("datetimeSettings") ? JSON.parse(localStorage.getItem("datetimeSettings") || "") : defaultDATSettings);
        })

        timeInterval = setInterval(() => {
            setTime(getTime(settings.showSeconds, settings.twentyFourHour))
            setDate(format(new Date(), settings.dateFormat))
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

            <CheckboxParent>
                <span>Date format</span>
                <TextField
                    value={settings.dateFormat}
                    placeholder={"Date format"}
                    variant="outlined"
                    size="small"
                    error={settings.dateFormat.length == 0}
                    onChange={(e: any) => onDateFormatChange(e.target.value)}
                />
            </CheckboxParent>
        </StyledDAT>
    )
}