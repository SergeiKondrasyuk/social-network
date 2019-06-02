import {axiosInstance, serverAPI} from '../dal/axios-instance';

const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    getUsersStatus: statuses.NOT_INITIALIZED,
    users: [],
    usersTotalCount: 0,
    usersCountOnPage: 14,
    currentPage: 1,
    isFetching: false,
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
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UN_FOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state,
                isFetching: action.isFetchingValue
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
export const setIsFetching = (isFetchingValue) => ({type: TOGGLE_IS_FETCHING, isFetchingValue});
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});

export const getUsers = (pageNumber) => (dispatch, getState) => {
    dispatch(setIsFetching(true));
    let state = getState().users;

    dispatch(setStatus(statuses.IN_PROGRESS));
    serverAPI.getUsersRequest(pageNumber, state.usersCountOnPage)
        .then((res) => {
            dispatch(setStatus(statuses.SUCCESS));
            dispatch(setUsers(res.data.items, res.data.totalCount));
            dispatch(setIsFetching(false));
        });
};

export const followUserRequest = (userId) => (dispatch) => {
    axiosInstance.post(`follow/${userId}`)
        .then(() => {
            dispatch(followAC(userId));
        });
};

export const unFollowUserRequest = (userId) => (dispatch) => {
    axiosInstance.delete(`follow/${userId}`)
        .then(() => {
            dispatch(unFollowAC(userId));
        });
};


export default usersReducer;