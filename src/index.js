import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myState = {
    dialogUsers: ['Maks', 'Bill', 'Anna', 'Vital', 'Svetlana', 'Victor', 'Alexander', 'Valery', 'Ludmila'],
    messages: ['Hello', 'Hi!', 'how is your progress in learning  REACT?'],
    navItems: ['Profile', 'Messages', 'Music', 'News', 'Settings'],
    postData: [
        {id: 1, text: 'Hello, world!', likeCount: 15},
        {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
        {id: 3, text: 'This is my own social network!', likeCount: 18},
        ],
    icons: {profile: '../../../img/icon-profile.png', messages: '../../../img/icon-messages.png', music: '../../../img/icon-music.png', news: '../../../img/icon-news.png', settings: '../../../img/icon-settings.png' },
    users: [
        {id: 1, firstName: 'Sergei', lastName: 'Kondrasiuk', address: 'Minsk', dob: '23 october', education: 'BSUIR\'13', skype: 'bender.cdf', avatar: '../../../../img/ava.jpg'},
        {id: 2, firstName: 'Bill', lastName: 'Gates', address: 'Seattle', dob: '28 october', education: 'Harvard' , skype: 'none', avatar: '../../../../img/bill.jpg'},
        ],
}
ReactDOM.render(<App state={myState}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
