import { Localized } from "@fluent/react";
import React from "react"

import '../../reset.css';

export const App = () => {
    return (
        <>
            <div>testing</div>
            <Localized id="testing" vars={{ name: "bruh" }}>
                <h1></h1>
            </Localized>
        </>
    )
}