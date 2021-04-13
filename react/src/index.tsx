import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Settings } from "./store";

console.time("start load")

new Settings();

ReactDOM.hydrate(
    <App />,
    document.getElementById("dot-ntp")
);