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
import channelsReducer from './reducers/channels_reducer';
import activeChannelReducer from './reducers/active_channel_reducer';
import usersReducer from './reducers/users_reducer';
import App from './components/app';

// State and reducers
const app = document.querySelector('#chat_app');
const initialState = {
  activeChannel: [],
  channels: [],
  msgs: [],
  users: [],
  curusr: JSON.parse(app.dataset.curusr.slice(0, -1))
}

const reducers = combineReducers({
  msgs: msgsReducer,
  channels: channelsReducer,
  activeChannel: activeChannelReducer,
  users: usersReducer,
  curusr: (state = null, action) => state
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware( logger, reduxPromise));
const store = createStore(reducers, initialState, middlewares);
// render an instance of the component in the DOM
// document.addEventListener('DOMContentLoaded', () => {
// const node = document.getElementById('content_div');
// const authenticity_token = JSON.parse(node.getAttribute('authenticity_token'));
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
