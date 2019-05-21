import {axiosInstance} from "../dal/axios-instance";

const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    INPROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    getUsersStatus: statuses.NOT_INITIALIZED,
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS : {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                getUsersStatus: action.getUsersStatus
            }
        }
        default: {
            return state;
        }
    }
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const setStatus = (getUsersStatus) => ({type: SET_STATUS, getUsersStatus});

export const getUsers = () => (dispatch, getState) => {
    let state = getState().users;

    if (state.getUsersStatus === statuses.NOT_INITIALIZED) {
        dispatch(setStatus(statuses.INPROGRESS));
        axiosInstance
            .get('users?count=20')
            .then((res) => {
                dispatch(setStatus(statuses.SUCCESS));
                dispatch(setUsers(res.data.items));
            });
    }
};

export const followUserRequest = (userId) => (dispatch) => {
    axiosInstance.post(`follow/${userId}`)
        .then((res) => {
            debugger
            if (res.data.resultCode == 0) {
                dispatch(setStatus(statuses.INPROGRESS));
                axiosInstance
                    .get('users?count=20')
                    .then((res) => {
                        dispatch(setStatus(statuses.SUCCESS));
                        dispatch(setUsers(res.data.items));
                    });
            }
        });
};
export const unFollowUserRequest = (userId) => (dispatch) => {
    axiosInstance.delete(`follow/${userId}`)
        .then((res) => {
            debugger
            if (res.data.resultCode == 0) {
                dispatch(setStatus(statuses.INPROGRESS));
                axiosInstance
                    .get('users?count=20')
                    .then((res) => {
                        dispatch(setStatus(statuses.SUCCESS));
                        dispatch(setUsers(res.data.items));
                    });
            }
        });
};


export default usersReducer;