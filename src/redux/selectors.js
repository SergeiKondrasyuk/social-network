import {createSelector} from 'reselect'

export const getLoginReducer = (state) => {
    return state.login;
};

export const getAuthReducer = (state) => {
    return state.auth;
};

export const getUsersReducer = (state) => {
    return state.users;
};

export const getProfilePageReducer = (state) => {
    return state.profilePage;
};

export const getUsersSelector = createSelector(getUsersReducer, (users) => {
    return users.users;
});
