import {dialogsAPI, serverAPI} from "../dal/axios-instance";

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const SET_NEED_REFRESH = 'SET_NEED_REFRESH';
const PUT_UP_DIALOG = 'PUT_UP_DIALOG';
const SET_NEW_MESSAGES_COUNT = 'SET_NEW_MESSAGES_COUNT';
const SET_HAS_NEW_MESSAGES = 'SET_HAS_NEW_MESSAGES';

const update = (state, action) => ({...state, ...action.payload});

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    currentUserAvatar: null,
    myAvatar: null,
    newMessagesCount: 0,
    needRefresh: false,
    currentDialogMessagesCount: 0,
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
            return {
                ...state,
                messages: action.messages,
                currentDialogMessagesCount: action.messagesTotalCount,
                currentUserAvatar: action.avatar,
                myAvatar: action.myAvatar,
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                messages: state.messages.filter(m => {
                    return m.id !== action.messageId
                })
            }
        }
        case SET_HAS_NEW_MESSAGES: {
            return {
                ...state, dialogs: state.dialogs.map(d => {
                    if (d.id == action.userId) {
                        return {...d, hasNewMessages: action.hasNewMessages}
                    } else return d
                })
            }
        }
        case SET_ALL_DIALOGS:
        case SET_CURRENT_DIALOG:
            return update(state, action);
        case SET_NEW_MESSAGES_COUNT:
            return {
                ...update(state, action)
            };
        default:
            return state;
    }
};

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});
export const deleteMessage = (messageId) => ({type: DELETE_MESSAGE, messageId});
export const setAllDialogs = (dialogs) => ({type: SET_ALL_DIALOGS, payload: {dialogs}});
export const setMessages = (messages, messagesTotalCount, avatar, myAvatar) => ({
    type: SET_MESSAGES, messages, messagesTotalCount, avatar, myAvatar,
});
export const setCurrentDialog = (selectedDialogId) => ({type: SET_CURRENT_DIALOG, payload: {selectedDialogId}});
export const putUpDialog = (dialogId) => ({type: PUT_UP_DIALOG, dialogId});
export const setCountOfNewMessages = (newMessagesCount) => ({
    type: SET_NEW_MESSAGES_COUNT, payload: {newMessagesCount}
});
export const setHasNewMessages = (userId, hasNewMessages) => ({type: SET_HAS_NEW_MESSAGES, userId, hasNewMessages});
export const setNeedRefresh = (needRefresh) => ({type: SET_NEED_REFRESH, payload: {needRefresh}});

export const getAllDialogs = () => (dispatch) => {
    dialogsAPI.getAllDialogsRequest().then(res => {
        if (res.status === 200) {
            dispatch(setAllDialogs(res.data));
        }
    })
};

export const getMessagesWithUser = (userId) => async (dispatch, getState) => {
    let state = getState();
    let messagesRes = await dialogsAPI.getMessagesWithUserRequest(userId);
    let myAvatar = (await serverAPI.profileInfoRequest(state.auth.userData.id)).data.photos.small;
    if (messagesRes.messages.some(m => !m.viewed)) {
        dispatch(setNeedRefresh(true))
    }
    let avatar = state.dialogPage.dialogs.find(d => d.id == userId).photos.small;
    dispatch(setMessages(messagesRes.messages, messagesRes.messagesTotalCount, avatar, myAvatar));
    dispatch(setHasNewMessages(userId, false));
};

export const sendMessageToUser = (userId, message) => async (dispatch) => {
    let response = await dialogsAPI.sendMessageToUserRequest(userId, message);
    dispatch(sendMessage(response.data.data.message));
};

export const getCountOfNewMessages = () => async (dispatch, getState) => {
    let state = getState();
    let count = await dialogsAPI.getCountOfNewMessagesRequest();
    if (state.dialogPage.newMessagesCount !== count.data || state.dialogPage.needRefresh) {
        dispatch(setNeedRefresh(false));
        dispatch(setCountOfNewMessages(count.data));
        dispatch(getAllDialogs());
        if (state.dialogPage.selectedDialogId != null) {
            dispatch(getMessagesWithUser(state.dialogPage.selectedDialogId))
        }
    }
};

export const putUpDialogToTop = (userId) => (dispatch, getState) => {
    dialogsAPI.putUpDialogToTopRequest(userId).then(res => {
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


export const deleteMessageWithUser = (messageId) => (dispatch) => {
    dialogsAPI.deleteMessageRequest(messageId).then(res => {
        if (res.resultCode === 0) {
            dispatch(deleteMessage(messageId));
        }
    });

};

export default dialogPageReducer;