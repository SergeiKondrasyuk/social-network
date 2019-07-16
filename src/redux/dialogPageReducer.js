import {serverAPI} from "../dal/axios-instance";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG';
const PUT_UP_DIALOG = 'PUT_UP_DIALOG';

const update = (state, action) => ({...state, ...action.payload});

let initialState = {
    dialogs: [],
    messages: [],
    selectedDialogId: null,
    currentUserAvatar: null,
};

const dialogPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE : {
            return {...state, messages: [...state.messages, action.message]}
        }
        case UPDATE_NEW_MESSAGE: {

        }
        case PUT_UP_DIALOG: {
            return {...state, dialogs: [state.dialogs.find(d=>d.id === action.dialogId),
                    ...state.dialogs.filter(d => d.id != action.dialogId)]}
        }
        case SET_MESSAGES:{
            return {...state, messages  :action.messages, currentUserAvatar: action.avatar}
        }
        case SET_ALL_DIALOGS:
        case SET_CURRENT_DIALOG:
            return update(state, action)
        default:
            return state;
    }
};

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});
export const updateNewMessageText = (newMessage) => ({type: UPDATE_NEW_MESSAGE, text: newMessage});
export const setAllDialogs = (dialogs) => ({type: SET_ALL_DIALOGS, payload: {dialogs}});
export const setMessages = (messages, avatar) => ({type: SET_MESSAGES, messages, avatar});
export const setCurrentDialog = (selectedDialogId) => ({type: SET_CURRENT_DIALOG, payload: {selectedDialogId}});
export const putUpDialog = (dialogId) => ({type: PUT_UP_DIALOG, payload: {dialogId}});

export const getAllDialogs = () => (dispatch) => {
    serverAPI.getAllDialogsRequest().then(res => {
        debugger
        if (res.status === 200) {
            dispatch(setAllDialogs(res.data));
        }
    })
};

export const getMessagesWithUser = (userId) => (dispatch,getState) => {
    let state = getState().dialogPage;
    serverAPI.getMessagesWithUserRequest(userId).then(res => {
        debugger
        if (res.status === 200) {
            debugger
            dispatch(setMessages(res.data.items, state.dialogs[0].photos.small));
        }
    })
};

export const sendMessageToUser = (userId, message) => async (dispatch) => {
    let response = await serverAPI.sendMessageToUserRequest(userId, message);
    dispatch(sendMessage(response.data.data.message));
    debugger
};

export const putUpDialogToTop = (userId) => (dispatch, getState) => {
    serverAPI.putUpDialogToTopRequest(userId).then(res => {
        let dialog = getState().dialogs.find(d => d.id == userId);
        if (dialog) {
            dispatch(putUpDialog(userId))
        } else {
            dispatch(getAllDialogs())
        }
    });
};


export default dialogPageReducer;