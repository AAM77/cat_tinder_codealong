import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


//The redux libraries are: redux, react-redux, redux-thunk
// the ingredients I need are"
//    - reducers
//    - store
//    - store
//    - actions (creators)

const cats = [
  {status: "undecided", image_url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Fluffy"},
  {status: "undecided", image_url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Peaches"},
  {status: "liked", image_url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Spike"}
]

export const getCats = {
  type: "GET_CATS",
  cats: cats
}

// reducer
const reducer = (state = { cats: [] }, action) => {
  switch (action.type) {
    default:
      return state
  }
};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore(
  reducer,
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
