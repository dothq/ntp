import React from "react"
import { Backgrounds } from "../Backgrounds"
import { Container, SettingsHeader, SettingsPanel, Title, Close, Section, SectionHeader, SectionTitle, CategoryBackgroundIcon } from "./style"

export const Settings = ({ visible, children }: { visible: boolean; children: any }) => {
    return (
        <SettingsPanel visible={visible}>
            {children}
            <Container>
                <Section>
                    <SectionHeader>
                        <CategoryBackgroundIcon />
                        <SectionTitle>Background</SectionTitle>
                    </SectionHeader>
                    <Backgrounds />
                </Section>
            </Container>
        </SettingsPanel>
    )
}