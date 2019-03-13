import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let myState = {
    user: ['Me', 'Maks','Dima','Anna','Vital','Svetlana','Victor','Alexander','Valery','Ludmila'],
    messages: ['Hello', 'Hi!', 'how is your progress in learning  node.js?'],
    avatars: ['../../../../img/avaSmile.png', '../../../../img/ava.png']
}

ReactDOM.render(<App state = {myState}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
