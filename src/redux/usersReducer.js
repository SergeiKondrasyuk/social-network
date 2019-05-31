import {axiosInstance, serverAPI} from "../dal/axios-instance";

const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    INPROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    getUsersStatus: statuses.NOT_INITIALIZED,
    users: [],
    usersTotalCount: 0,
    usersCountOnPage: 14,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS : {
            return {
                ...state,
                users: action.users,
                usersTotalCount: action.totalCount
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                getUsersStatus: action.getUsersStatus
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default: {
            return state;
        }
    }
};

export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const setStatus = (getUsersStatus) => ({type: SET_STATUS, getUsersStatus});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const getUsers = (pageNumber) => (dispatch, getState) => {
    let state = getState().users;

    dispatch(setStatus(statuses.INPROGRESS));
    serverAPI.getUsersRequest(pageNumber, state.usersCountOnPage)
        .then((res) => {
            dispatch(setStatus(statuses.SUCCESS));
            dispatch(setUsers(res.data.items, res.data.totalCount));
        });
};

export const followUserRequest = (userId) => (dispatch) => {
    axiosInstance.post(`follow/${userId}`)
        .then((res) => {
            debugger
            if (res.data.resultCode === 0) {
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
            if (res.data.resultCode === 0) {
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