import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux"; /* code change */
import App from "./App";
import MainReducer from './reducers/MainReducers';
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(
  MainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById("root")
); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

