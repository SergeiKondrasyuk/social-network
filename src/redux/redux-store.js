import {applyMiddleware, createStore, compose} from "redux";
import {reducer as formReducer} from 'redux-form'
import {combineReducers} from "redux/es/redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navReducer from "./navReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import {logger} from 'redux-logger';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    nav: navReducer,
    friends: friendsReducer,
    users: usersReducer,
    login: loginReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

//let store = createStore(reducers, applyMiddleware(logger, thunk));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;