import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myState from './redux/state.js';

let addPost = (post) => {
    myState.postData = [...myState.postData, {id: myState.postData.length++, text: post, likeCount: 0}];
    renderPage();
}

const renderPage = () => {
    ReactDOM.render(<App state={myState} addPost={addPost}/>, document.getElementById('root'));
}

renderPage();


serviceWorker.unregister();
