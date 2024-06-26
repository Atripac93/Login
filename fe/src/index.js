import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import booksReducer from "./redux/books/booksSlice";

const rootReducer = combineReducers({
  booksData: booksReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
