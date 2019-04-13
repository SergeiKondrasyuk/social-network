import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';

const renderPage = () => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
};

store.subscribe(renderPage);

renderPage();

serviceWorker.unregister();
