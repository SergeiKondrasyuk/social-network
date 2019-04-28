const SET_FRIENDS = 'SET_FRIENDS';
const SET_STATUS = 'SET_STATUS';

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    status: statuses.NOT_INITIALIZED,
    friends: [],
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS : {
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
};

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setStatus = (status) => ({type: SET_STATUS, status});


export default friendsReducer;