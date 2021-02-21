// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// internal modules

import msgsReducer from './reducers/msgs_reducer';
import App from './components/app';
// State and reducers

const initialState = {
  channels: ['general', 'amsterdam', 'react'],
  msgs: []
}

const reducers = combineReducers({
  msgs: msgsReducer,
  channels: (state = null, action) => state
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware( logger, reduxPromise));
const store = createStore(reducers, initialState, middlewares);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#chat_app')
);
