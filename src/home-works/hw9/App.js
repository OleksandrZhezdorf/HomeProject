import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./Routes";

const store = createStore();

export default function HW9() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
