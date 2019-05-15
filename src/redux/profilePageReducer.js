import {axiosInstance} from "../dal/axios-instance";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_PROFILE_INFO_REQUEST_STATUS = 'SET_PROFILE_INFO_REQUEST_STATUS';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const ON_CONTACT_CHANGE = 'ON_CONTACT_CHANGE';
const SET_EDIT_MODE_STATUS = 'SET_EDIT_MODE_STATUS';
const SET_ME_ID = 'SET_ME_ID';

export const getProfileInfoStatuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
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
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: null,
                twitter: null,
                instagram: null,
                youtube: null,
                github: null,
                mainLink: null
            },
            lookingForAJob: null,
            lookingForAJobDescription: null,
            fullName: null,
            userId: null,
            photos: {
                small: null,
                large: null
            }
        },
        editMode: false,
        meIdRequest: null,
    };

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let cloneState = {...state};
            if (state.newPost.trim()) {
                let newPost = {id: 4, text: state.newPost, likeCount: 0};
                cloneState.postData = [newPost, ...cloneState.postData].reverse();
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
                profileInfoRequestStatus: action.status,
            }
        }
        case SET_EDIT_MODE_STATUS: {
            return {
                ...state,
                editMode: action.value,
            }
        }
        case SET_ME_ID: {
            return {
                ...state,
                meIdRequest: action.id,
            }
        }
        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    aboutMe: action.status.aboutMe,
                    contacts: {
                        ...state.profileInfo.contacts,
                        facebook: action.status.contacts.facebook,
                        website: action.status.contacts.website,
                        vk: action.status.contacts.vk,
                        twitter: action.status.contacts.twitter,
                        instagram: action.status.contacts.instagram,
                        youtube: action.status.contacts.youtube,
                        github: action.status.contacts.github,
                        mainLink: action.status.contacts.mainLink
                    },
                    lookingForAJob: action.status.lookingForAJob,
                    lookingForAJobDescription: action.status.lookingForAJobDescription,
                    fullName: action.status.fullName,
                    userId: action.status.userId,
                    photos: {
                        ...state.profileInfo.photos,
                        small: action.status.photos.small,
                        large: action.status.photos.large
                    }
                }
            }
        }
        case ON_CONTACT_CHANGE: {
            let cloneState = {...state};
            cloneState.profileInfo.contacts[action.contactKey] = action.value;
            return cloneState;
        }

        default:
            return state;
    }
};

export const profileInfoRequest = (id) => (d) => {
    d(setProfileInfoRequestStatus(getProfileInfoStatuses.INPROGRESS));
    axiosInstance.get('profile/' + id).then(res => {
        d(setProfileInfo(res.data));
        d(setProfileInfoRequestStatus(getProfileInfoStatuses.SUCCESS));
    });
    axiosInstance.get('auth/me').then(res => {
        d(setMeId(res.data.data.id));
    });
};

export const profileInfoPutRequest = () => (d) => {
    d(setEditModeStatus(false));
    axiosInstance.put('profile/', {
        "aboutMe": 'cool',
        "contacts": {
            "facebook": 'www.facebook.com',
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "yo",
        fullName: "bendercdf",
    }).then(res => {

    });
};

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newPost) => ({type: UPDATE_NEW_POST, text: newPost});
export const setProfileInfoRequestStatus = (status) => ({type: SET_PROFILE_INFO_REQUEST_STATUS, status: status});
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, status: profileInfo});
export const setMeId = (id) => ({type: SET_ME_ID, id: id});
export const setEditModeStatus = (value) => ({type: SET_EDIT_MODE_STATUS, value: value});
export const onContactChange = (value, contactKey) => ({type: ON_CONTACT_CHANGE, value: value, contactKey: contactKey});


export default profilePageReducer;