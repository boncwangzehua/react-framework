import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
//import App from './pages/App';
import ReactStack from './components/reactStack';
const store = createStore(reducer);
ReactDOM.render (
    <Provider store={store}>
        <ReactStack />
    </Provider>,
  document.getElementById('root')
);
