import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import React from "react";
import Navigation from "./Routes";


const store = createStore();

export default function GitApp() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
