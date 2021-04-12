import React from "react"
import { Weather } from "../Weather"
import { Backgrounds } from "../Backgrounds"
import { DAT } from "../DAT"
import { Container, SettingsHeader, SettingsPanel, Title, Close, Section, SectionHeader, SectionTitle, CategoryBackgroundIcon, CategoryDATIcon, CategoryWeatherIcon } from "./style"

export const Settings = ({ visible, settingsClose }: { visible: boolean; settingsClose: any }) => {
    const ref = React.createRef<HTMLDivElement>();

    const [atTop, setTop] = React.useState(true);

    React.useEffect(() => {
        ref.current?.addEventListener("scroll", (e: any) => {
            if(e.target.scrollTop == 0) setTop(true)
            else setTop(false)
        })
    })

    return (
        <SettingsPanel visible={visible}>
            <SettingsHeader atTop={atTop}>
                <Title>
                    Settings
                </Title>

                <Close onClick={() => settingsClose()} />
            </SettingsHeader>
            <Container ref={ref}>
                <Section style={{ marginBottom: "16px" }}>
                    <SectionHeader>
                        <CategoryBackgroundIcon />
                        <SectionTitle>Background</SectionTitle>
                    </SectionHeader>
                    <Backgrounds />
                </Section>

                <Section>
                    <SectionHeader>
                        <CategoryDATIcon />
                        <SectionTitle>Date &amp; Time</SectionTitle>
                    </SectionHeader>
                    <DAT />
                </Section>

                <Section>
                    <SectionHeader>
                        <CategoryWeatherIcon />
                        <SectionTitle>Weather</SectionTitle>
                    </SectionHeader>
                    <Weather />
                </Section>
            </Container>
        </SettingsPanel>
    )
}