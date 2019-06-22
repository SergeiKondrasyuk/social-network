import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {Provider} from "react-redux";


const renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
};

store.subscribe(renderPage);

renderPage();

serviceWorker.unregister();
