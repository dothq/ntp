import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";
import { Settings } from "./store";

new Settings();

ReactDOM.render(
    <App />,
    document.getElementById("dot-ntp")
);