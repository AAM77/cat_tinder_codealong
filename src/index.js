import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import cats from './reducers/cats';


//The redux libraries are: redux, react-redux, redux-thunk
// the ingredients I need are"
//    - reducers
//    - store
//    - store
//    - actions (creators)


export const getCats = {
  type: "GET_CATS",
  cats: cats
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers(
  // pass an object containing the list of reducers we want to combine
  {
    cats,
    //reducer1,
    //reducer2,
    //reducer3,
    //... etc.
  }
)
console.log(reducers)

// store
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// This (index.js) is an important file because
// (1) It is what calls 'App' and we need to put 'App'
//     in the 'Provider' (a part of redux)
// (2) It is where createStore goes

// first, though, we need to import 'Provider'
