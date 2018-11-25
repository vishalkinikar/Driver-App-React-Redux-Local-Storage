import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { thunkMiddleware, persistData } from './Middleware';
import { DriverReducer, ModalReducer } from './Reducers';

import { DriverApp } from './App';

// Redux configuration 
const rootReducer = combineReducers({
  drivers: DriverReducer,  
  modal: ModalReducer
});

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunkMiddleware, persistData))}>
    <DriverApp />
  </Provider>, 
  document.querySelector('#root'));

