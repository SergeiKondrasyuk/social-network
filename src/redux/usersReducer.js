import {serverAPI} from '../dal/axios-instance';

const SET_USERS = 'USER/SET_USERS';
const SET_STATUS = 'USER/SET_STATUS';
const SET_CURRENT_PAGE = 'USER/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'USER/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USER/TOGGLE_IS_FOLLOWING_PROGRESS';
const FOLLOW = 'USER/FOLLOW';
const UN_FOLLOW = 'USER/UN_FOLLOW';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    getUsersStatus: statuses.NOT_INITIALIZED,
    users: [],
    usersTotalCount: 0,
    usersCountOnPage: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS :
            return {...state, users: action.users, usersTotalCount: action.totalCount};
        case SET_STATUS :
            return {...state, getUsersStatus: action.getUsersStatus};
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UN_FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage};
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetchingValue};
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetchingValue
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount});
export const setStatus = (getUsersStatus) => ({type: SET_STATUS, getUsersStatus});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetchingValue) => ({type: TOGGLE_IS_FETCHING, isFetchingValue});
export const setFollowingInProgress = (isFetchingValue, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetchingValue,
    userId
});
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});

export const getUsers = (pageNumber) => async (dispatch, getState) => {
    dispatch(setIsFetching(true));
    let state = getState().users;
    dispatch(setStatus(statuses.IN_PROGRESS));
    let response = await serverAPI.getUsersRequest(pageNumber, state.usersCountOnPage)
    if (!response.error) {
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setUsers(response.data.items, response.data.totalCount));
        dispatch(setIsFetching(false));
    }
};

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
        dispatch(setFollowingInProgress(false, userId));
    }
};

export const followUser = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, serverAPI.followUser.bind(userId), followAC);
    }
};

export const unFollowUser = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, serverAPI.unFollowUser.bind(userId), unFollowAC);
    }
};

export default usersReducer;