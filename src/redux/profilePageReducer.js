import {serverAPI} from '../dal/axios-instance';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_PROFILE_INFO_REQUEST_STATUS = 'SET_PROFILE_INFO_REQUEST_STATUS';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const ON_CONTACT_CHANGE = 'ON_CONTACT_CHANGE';
const ON_ABOUT_ME_CHANGE = 'ON_ABOUT_ME_CHANGE';
const ON_FULL_NAME_CHANGE = 'ON_FULL_NAME_CHANGE';
const SET_LOOKING_JOB_STATUS = 'SET_LOOKING_JOB_STATUS';
const ON_JOB_DESCRIPTION_CHANGE = 'ON_JOB_DESCRIPTION_CHANGE';
const ON_PHOTO_CHANGE = 'ON_PHOTO_CHANGE';
const SET_PHOTO_UPDATE_ERROR_MESSAGE = 'SET_PHOTO_UPDATE_ERROR_MESSAGE';
const SET_PROFILE_UPDATE_ERROR_MESSAGE = 'SET_PROFILE_UPDATE_ERROR_MESSAGE';

export const getProfileInfoStatuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS'
};

let initialState =
    {
        postData: [
            {id: 1, text: 'Hello, world!', likeCount: 15},
            {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
            {id: 3, text: 'This is my own social network!', likeCount: 18},
        ],
        newPost: '',
        profileInfoRequestStatus: 'NOT_INITIALIZED',
        profileInfo: null,
        profileStatus: null,
        updatePhotoErrorMessage: null,
        updateProfileErrorMessage: null,
    };

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let cloneState = {...state};
            if (state.newPost.trim()) {
                let newPost = {id: 4, text: state.newPost, likeCount: 0};
                cloneState.postData = [...cloneState.postData, newPost];
                cloneState.newPost = '';
            }
            return cloneState;
        }
        case UPDATE_NEW_POST: {
            let cloneState = {...state};
            cloneState.newPost = action.text;
            return cloneState;
        }
        case SET_PROFILE_INFO_REQUEST_STATUS: {
            return {
                ...state,
                profileInfoRequestStatus: action.getUsersStatus,
            }
        }
        case ON_ABOUT_ME_CHANGE: {
            let cloneState = {...state};
            cloneState.profileInfo.aboutMe = action.value;
            return cloneState;
        }
        case ON_FULL_NAME_CHANGE: {
            let cloneState = {...state};
            cloneState.profileInfo.fullName = action.value;
            return cloneState;
        }
        case SET_LOOKING_JOB_STATUS: {
            let cloneState = {...state};
            cloneState.profileInfo.lookingForAJob = action.value;
            return cloneState;
        }
        case ON_JOB_DESCRIPTION_CHANGE: {
            let cloneState = {...state};
            cloneState.profileInfo.lookingForAJobDescription = action.value;
            return cloneState;
        }
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: action.profileInfo,
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.profileStatus,
            }
        }
        case SET_PHOTO_UPDATE_ERROR_MESSAGE: {
            return {
                ...state,
                updatePhotoErrorMessage: action.value
            }
        }
        case SET_PROFILE_UPDATE_ERROR_MESSAGE: {
            return {
                ...state,
                updateProfileErrorMessage: action.value
            }
        }
        case ON_CONTACT_CHANGE: {
            let cloneState = {...state};
            cloneState.profileInfo.contacts[action.contactKey] = action.value;
            return cloneState;
        }
        case ON_PHOTO_CHANGE: {
            debugger
            let cloneState = {...state};
            cloneState.profileInfo.photo = action.photo;
            return cloneState;
        }

        default:
            return state;
    }
};

export const getProfileInfo = (userId) => (dispatch) => {
    dispatch(setProfileInfoRequestStatus(getProfileInfoStatuses.INPROGRESS));
    serverAPI.profileInfoRequest(userId).then(res => {
        if (res.status === 200) {
            dispatch(setProfileInfo(res.data));
            dispatch(setProfileInfoRequestStatus(getProfileInfoStatuses.SUCCESS));
        }
    });
};

export const putProfileInfo = () => (dispatch, getState) => {
    let profileInfo = getState().profilePage.profileInfo;
    serverAPI.putProfileInfoRequest(profileInfo)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setPhotoUpdateErrorMessage(''))
                dispatch(setProfileUpdateErrorMessage(''))
            } else {
                dispatch(setProfileUpdateErrorMessage(res.data.messages));
            }
        });
};

export const updateStatus = (status) => (dispatch) => {
    serverAPI.updateStatusRequest(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    });
};

export const getStatus = (userId) => (dispatch) => {
    serverAPI.getStatusRequest(userId).then(res => {
        if (res.status === 200) {
            dispatch(setProfileStatus(res.data))
        }
    });
};

export const uploadPhoto = (photo) => (dispatch, getState) => {
    let userId = getState().profilePage.profileInfo.userId;
    serverAPI.uploadPhotoRequest(photo).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(onPhotoChange(res.data.photo));
            dispatch(getProfileInfo(userId))
        } else {
            dispatch(setPhotoUpdateErrorMessage(res.data.messages));
        }
    });
};


export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newPost) => ({type: UPDATE_NEW_POST, text: newPost});
export const setProfileInfoRequestStatus = (status) => ({
    type: SET_PROFILE_INFO_REQUEST_STATUS,
    getUsersStatus: status
});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo});
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus});
export const onContactChange = (value, contactKey) => ({type: ON_CONTACT_CHANGE, value, contactKey});
export const onAboutMeChange = (value) => ({type: ON_ABOUT_ME_CHANGE, value});
export const onFullNameChange = (value) => ({type: ON_FULL_NAME_CHANGE, value});
export const setLookingForAJobStatus = (value) => ({type: SET_LOOKING_JOB_STATUS, value});
export const setPhotoUpdateErrorMessage = (value) => ({type: SET_PHOTO_UPDATE_ERROR_MESSAGE, value});
export const setProfileUpdateErrorMessage = (value) => ({type: SET_PROFILE_UPDATE_ERROR_MESSAGE, value});
export const onJobDescriptionChange = (value) => ({type: ON_JOB_DESCRIPTION_CHANGE, value});
export const onPhotoChange = (photo) => ({type: ON_PHOTO_CHANGE, value: photo});


export default profilePageReducer;