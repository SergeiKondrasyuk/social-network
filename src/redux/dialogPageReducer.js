const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

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

const dialogPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE :
            if (state.dialogs[0].newMessage.trim()) {
                let currentDate = new Date();
                let currentYear = currentDate.getFullYear();
                let currentMonth = ((currentDate.getMonth() + 1).toString().length === 1) ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
                let currentDay = ((currentDate.getDate()).toString().length === 1) ? `0${currentDate.getDate()}` : currentDate.getDate();
                let currentHours = ((currentDate.getHours()).toString().length === 1) ? `0${currentDate.getHours()}` : currentDate.getHours();
                let currentMinutes = ((currentDate.getMinutes()).toString().length === 1) ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

                let newMessage = {
                    id: 5,
                    content: state.dialogs[0].newMessage,
                    addedTime: `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}`,
                    type: 'outcoming',
                    author: {
                        id: 1,
                        name: 'Sergei',
                        avatar: '../../../../img/ava.jpg',
                    }
                };
                state.dialogs[0].messages.push(newMessage);
                state.dialogs[0].newMessage = '';
            }
            return state;
        case UPDATE_NEW_MESSAGE:
            state.dialogs[0].newMessage = action.text;
            return state;
        default:
            return state;
    }

}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextAC = (newMessage) => ({type: UPDATE_NEW_MESSAGE, text: newMessage,});


export default dialogPageReducer;