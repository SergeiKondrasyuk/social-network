import {serverAPI} from "../dal/axios-instance";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SET_ALL_DIALOGS = 'SET_ALL_DIALOGS';

let initialState = {
    dialogs: [
        {
            id: 1,
            messages: [
                {
                    id: 1,
                    content: 'Hello',
                    addedTime: '2019-03-11 15:45',
                    type: 'incoming',
                    author: {
                        id: 2,
                        name: 'Bill',
                        avatar: '../../../../img/bill.jpg',
                    }
                },
                {
                    id: 2,
                    content: 'Hi!',
                    addedTime: '2019-03-11 16:01',
                    type: 'outcoming',
                    author: {
                        id: 1,
                        name: 'Sergei',
                        avatar: '../../../../img/ava.jpg',
                    }
                },
                {
                    id: 3,
                    content: 'How is your progress in learning REACT?',
                    addedTime: '2019-03-11 16:44',
                    type: 'incoming',
                    author: {
                        id: 2,
                        name: 'Bill',
                        avatar: '../../../../img/bill.jpg',
                    }
                },
                {
                    id: 4,
                    content: 'Very good',
                    addedTime: '2019-03-11 17:10',
                    type: 'outcoming',
                    author: {
                        id: 1,
                        name: 'Sergei',
                        avatar: '../../../../img/ava.jpg',
                    }
                },

            ],
            newMessage: '',
        }
    ],
    dialogUsers: ['Maks', 'Bill', 'Anna', 'Vital', 'Svetlana', 'Victor', 'Alexander', 'Valery', 'Ludmila'],
};

const dialogPageReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case SEND_MESSAGE : {
            let cloneState = {...state};
            if (cloneState.dialogs[0].newMessage.trim()) {
                let currentDate = new Date();
                let currentYear = currentDate.getFullYear();
                let currentMonth = ((currentDate.getMonth() + 1).toString().length === 1) ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
                let currentDay = ((currentDate.getDate()).toString().length === 1) ? `0${currentDate.getDate()}` : currentDate.getDate();
                let currentHours = ((currentDate.getHours()).toString().length === 1) ? `0${currentDate.getHours()}` : currentDate.getHours();
                let currentMinutes = ((currentDate.getMinutes()).toString().length === 1) ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

                let newMessage = {
                    id: 5,
                    content: cloneState.dialogs[0].newMessage,
                    addedTime: `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}`,
                    type: 'outcoming',
                    author: {
                        id: 1,
                        name: 'Sergei',
                        avatar: '../../../../img/ava.jpg',
                    }
                };
                cloneState.dialogs[0].messages.push(newMessage);
                cloneState.dialogs[0].newMessage = '';
            }
            return cloneState;
        }
        case UPDATE_NEW_MESSAGE: {
            let cloneState = {...state};
            state.dialogs[0].newMessage = action.text;
            return cloneState;
        }
        case SET_ALL_DIALOGS: {
            return{
                ...state, dialogs: action.dialogs
            }
        }
        default:
            return state;
    }
};

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE, text: newMessage,});
export const setAllDialogs = (dialogs: any) => ({type: SET_ALL_DIALOGS, dialogs});

export const getAllDialogs =() => (dispatch: Function) => {
    serverAPI.getAllDialogsRequest().then(res => {
        if (res.data.resultCode === 0){
            dispatch(setAllDialogs(res));
        }
    })
};

export const sendMessageToFriend =(friendId: number, message: string) => (dispatch: Function) => {
    serverAPI.sendMessageToFriendRequest(friendId, message).then(

    )
};

export default dialogPageReducer;