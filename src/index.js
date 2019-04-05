import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state.js';

const renderPage = () => {
    ReactDOM.render(<App state={store.getState()} dispatcher={store.dispatcher.bind(store)}/>, document.getElementById('root'));
};

store.subscribe(renderPage);

renderPage();

serviceWorker.unregister();
