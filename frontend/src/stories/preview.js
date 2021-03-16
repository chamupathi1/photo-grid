import React from "react";
import { Provider } from "react-redux";
import { store } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.css';
 

export const decorators = [
  Story => (
    <Provider store={store}>
          <Story />
    </Provider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};