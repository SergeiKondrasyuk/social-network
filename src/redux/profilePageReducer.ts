import {serverAPI} from '../dal/axios-instance';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_PROFILE_INFO_REQUEST_STATUS = 'SET_PROFILE_INFO_REQUEST_STATUS';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const ON_CONTACT_CHANGE = 'ON_CONTACT_CHANGE';
const SET_EDIT_MODE_STATUS = 'SET_EDIT_MODE_STATUS';
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
        profileInfo: {
            "aboutMe": "",
            "contacts": {
                "facebook": "facebook.com",
                "website": "www.facebook.com",
                "vk": "www.facebook.com",
                "twitter": "www.facebook.com",
                "instagram": "www.facebook.com",
                "youtube": "www.facebook.com",
                "github": "https://www.linkedin.com/in/sergei-kondrasyuk/",
                "mainLink": "www.facebook.com"
            },
            "lookingForAJob": true,
            "lookingForAJobDescription": "YOYOyoYO",
            "fullName": "Sergei",
            "userId": 1054,
            "photos": {
                "small": "https://social-network.samuraijs.com/activecontent/images/users/1054/user-small.jpg?v=109",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/1054/user.jpg?v=109"
            }
        },
        profileStatus: null,
        updatePhotoErrorMessage: null,
        updateProfileErrorMessage: null,
        editMode: false,
    };

const profilePageReducer = (state = initialState, action: any) => {

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
        case SET_EDIT_MODE_STATUS: {
            return {
                ...state,
                editMode: action.value,
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
            // @ts-ignore
            cloneState.profileInfo.contacts[action.contactKey] = action.value;
            return cloneState;
        }
        case ON_PHOTO_CHANGE: {
            debugger
            let cloneState = {...state};
            cloneState.profileInfo.photos = action.photo;
            return cloneState;
        }

        default:
            return state;
    }
};

export const getProfileInfo = (userId: number) => (dispatch: Function) => {
    dispatch(setProfileInfoRequestStatus(getProfileInfoStatuses.INPROGRESS));
    serverAPI.profileInfoRequest(userId).then(res => {
        if (res.status === 200) {
            dispatch(setProfileInfo(res.data));
            dispatch(setProfileInfoRequestStatus(getProfileInfoStatuses.SUCCESS));
        }
    });
};

export const putProfileInfo = () => (dispatch: Function, getState: Function) => {
    let profileInfo = getState().profilePage.profileInfo;
    serverAPI.putProfileInfoRequest(profileInfo)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setPhotoUpdateErrorMessage(''))
                dispatch(setProfileUpdateErrorMessage(''))
                dispatch(setEditModeStatus(false));
            } else {
                dispatch(setProfileUpdateErrorMessage(res.data.messages));
            }
        });
};

export const updateStatus = (status: string) => (dispatch: Function) => {
    serverAPI.updateStatusRequest(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    });
};

export const getStatus = (userId: number) => (dispatch: Function) => {
    serverAPI.getStatusRequest(userId).then(res => {
        if (res.status === 200) {
            dispatch(setProfileStatus(res.data))
        }
    });
};

export const uploadPhoto = (photo: any) => (dispatch: Function, getState: Function) => {
    let userId = getState().profilePage.profileInfo.userId;
    serverAPI.uploadPhotoRequest(photo).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(onPhotoChange(res.data.photo));
            dispatch(setEditModeStatus(false));
            dispatch(getProfileInfo(userId))
        } else {
            dispatch(setPhotoUpdateErrorMessage(res.data.messages));
        }
    });
};


export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newPost: string) => ({type: UPDATE_NEW_POST, text: newPost});
export const setProfileInfoRequestStatus = (status: string) => ({
    type: SET_PROFILE_INFO_REQUEST_STATUS,
    getUsersStatus: status
});
export const setProfileInfo = (profileInfo: any) => ({type: SET_PROFILE_INFO, profileInfo});
export const setProfileStatus = (profileStatus: string) => ({type: SET_PROFILE_STATUS, profileStatus});
export const setEditModeStatus = (value: boolean) => ({type: SET_EDIT_MODE_STATUS, value});
export const onContactChange = (value: string, contactKey: string) => ({type: ON_CONTACT_CHANGE, value, contactKey});
export const onAboutMeChange = (value: string) => ({type: ON_ABOUT_ME_CHANGE, value});
export const onFullNameChange = (value: string) => ({type: ON_FULL_NAME_CHANGE, value});
export const setLookingForAJobStatus = (value: boolean) => ({type: SET_LOOKING_JOB_STATUS, value});
export const setPhotoUpdateErrorMessage = (value: string) => ({type: SET_PHOTO_UPDATE_ERROR_MESSAGE, value});
export const setProfileUpdateErrorMessage = (value: string) => ({type: SET_PROFILE_UPDATE_ERROR_MESSAGE, value});
export const onJobDescriptionChange = (value: string) => ({type: ON_JOB_DESCRIPTION_CHANGE, value});
export const onPhotoChange = (photo: any) => ({type: ON_PHOTO_CHANGE, value: photo});


export default profilePageReducer;