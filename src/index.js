import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import registerServiceWorker from "./registerServiceWorker";
// eslint-disable-next-line
import DevTools from "mobx-react-devtools";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
