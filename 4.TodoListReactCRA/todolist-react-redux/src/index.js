import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import App from './App';

const store = createStore(RootReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
