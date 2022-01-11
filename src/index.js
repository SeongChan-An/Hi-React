import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import axios from "axios";
import "./css/auth.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Clayful from "clayful/client-js";
const ClayfulConfig = require("./Config/clayfulToken.json");

Clayful.config({
  client: `${ClayfulConfig.token}`,
});

Clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
