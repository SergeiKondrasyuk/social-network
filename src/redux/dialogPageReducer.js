import {serverAPI} from "../dal/axios-instance";

const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const PUT_UP_DIALOG = 'PUT_UP_DIALOG';
const SET_NEW_MESSAGES_COUNT = 'SET_NEW_MESSAGES_COUNT';

const update = (state, action) => ({...state, ...action.payload});

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    currentUserAvatar: null,
    newMessagesCount: 2,
};

const dialogPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE : {
            return {...state, messages: [...state.messages, action.message]}
        }
        case PUT_UP_DIALOG: {
            return {
                ...state, dialogs: [state.dialogs.find(d => d.id == action.dialogId),
                    ...state.dialogs.filter(d => d.id != action.dialogId)]
            }
        }
        case SET_MESSAGES: {
            return {...state, messages: action.messages, currentUserAvatar: action.avatar}
        }
        case SET_ALL_DIALOGS:
        case SET_CURRENT_DIALOG:
        case SET_NEW_MESSAGES_COUNT:
            return update(state, action)
        default:
            return state;
    }
};

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});
export const setAllDialogs = (dialogs) => ({type: SET_ALL_DIALOGS, payload: {dialogs}});
export const setMessages = (messages, avatar) => ({type: SET_MESSAGES, messages, avatar});
export const setCurrentDialog = (selectedDialogId) => ({type: SET_CURRENT_DIALOG, payload: {selectedDialogId}});
export const putUpDialog = (dialogId) => ({type: PUT_UP_DIALOG, dialogId});
export const setCountOfNewMessages = (newMessagesCount) => ({type: SET_NEW_MESSAGES_COUNT, payload: {newMessagesCount}});

export const getAllDialogs = () => (dispatch) => {
    serverAPI.getAllDialogsRequest().then(res => {
        if (res.status === 200) {
            dispatch(setAllDialogs(res.data));
        }
    })
};

export const getMessagesWithUser = (userId) => (dispatch, getState) => {
    let state = getState().dialogPage;
    serverAPI.getMessagesWithUserRequest(userId).then(res => {
        if (res.status === 200) {
            dispatch(setMessages(res.data.items, state.dialogs[0].photos.small));
        }
    })
};

export const sendMessageToUser = (userId, message) => async (dispatch) => {
    let response = await serverAPI.sendMessageToUserRequest(userId, message);
    dispatch(sendMessage(response.data.data.message));
};

export const getCountOfNewMessages = () => async (dispatch) => {
    let count = await serverAPI.getCountOfNewMessagesRequest();
    dispatch(setCountOfNewMessages(count));
};

export const putUpDialogToTop = (userId) => (dispatch, getState) => {
    serverAPI.putUpDialogToTopRequest(userId).then(res => {
        if (res.data.resultCode === 0) {
            let dialog = getState().dialogPage.dialogs.find(d => d.id == userId);
            if (dialog) {
                dispatch(putUpDialog(userId))
            } else {
                dispatch(getAllDialogs())
            }
        }
    });
};


export default dialogPageReducer;