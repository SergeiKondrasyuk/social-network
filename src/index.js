import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import SocialApp from './App';
import * as serviceWorker from './serviceWorker';


    ReactDOM.render(<SocialApp/>, document.getElementById('root'));


serviceWorker.unregister();
