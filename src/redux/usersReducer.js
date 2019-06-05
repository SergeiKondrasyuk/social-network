import {serverAPI} from '../dal/axios-instance';

const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
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
    followingInProgress: [2]
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
                    if (u.id === action.userId) {
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
                    if (u.id === action.userId) {
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
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetchingValue
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
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
export const setFollowingInProgress = (isFetchingValue, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetchingValue, userId});
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

export const followUser = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    serverAPI.followUser(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(userId));
                dispatch(setFollowingInProgress(false, userId));
            }
        });
};

export const unFollowUser = (userId) => (dispatch) => {
    dispatch(setFollowingInProgress(true));
    serverAPI.unFollowUser(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowAC(userId));
                dispatch(setFollowingInProgress(false));
            }
        });
};


export default usersReducer;