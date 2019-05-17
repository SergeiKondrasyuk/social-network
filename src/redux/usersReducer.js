import {axiosInstance} from "../dal/axios-instance";

const SET_USERS = 'SET_USERS';
const SET_STATUS = 'SET_STATUS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    INPROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    status: statuses.NOT_INITIALIZED,
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
                status: action.status
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
        case UNFOLLOW : {
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
        default: {
            return state;
        }
    }
};

export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});

export const getUsers = (status) => (d) => {

    if (status === statuses.NOT_INITIALIZED) {
    d(setStatus(statuses.INPROGRESS));
    axiosInstance
        .get('users?count=20')
        .then((res) => {
            d(setStatus(statuses.SUCCESS));
            d(setUsers(res.data.items));
        });
}};


export default usersReducer;