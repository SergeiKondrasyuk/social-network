import {createStore} from "redux";
import {combineReducers} from "redux/es/redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    nav: navReducer,
    users: usersReducer,
});

let store = createStore(reducers);

export  default store;