import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myState, {addPost} from './redux/state.js';
import {sendMessage, subscribe, updateNewMessage, updateNewPost} from "./redux/state";


export const renderPage = () => {
    ReactDOM.render(<App state={myState} addPost={addPost} updateNewPost={updateNewPost} sendMessage={sendMessage}
                         updateNewMessage={updateNewMessage}/>, document.getElementById('root'));
}
subscribe(() => {
    renderPage();
})

renderPage();

serviceWorker.unregister();
