import React from "react"
import { BackgroundImage, BackgroundItem, StyledBackgrounds } from "./style"

export const Backgrounds = () => {
    return (
        <StyledBackgrounds>
            <BackgroundItem>
                <BackgroundImage src={require("../../assets/settings/backgrounds/unsplash.svg")} />
                <p>Unsplash</p>
            </BackgroundItem>

            <BackgroundItem>
                <BackgroundImage src={require("../../assets/settings/backgrounds/solid.png")} />
                <p>Solid Colour</p>
            </BackgroundItem>
        </StyledBackgrounds>
    )
}