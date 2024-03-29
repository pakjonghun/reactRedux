import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store";

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
