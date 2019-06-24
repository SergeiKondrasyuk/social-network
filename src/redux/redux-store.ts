import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navReducer from "./navReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    nav: navReducer,
    friends: friendsReducer,
    users: usersReducer,
    login: loginReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;