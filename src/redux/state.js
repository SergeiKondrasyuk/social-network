let store = {
    _state: {
        nav: {
            navItems: [
                {title: 'Profile', link: '/profile', icon: '../../../img/icon-profile.png'},
                {title: 'Messages', link: '/dialogs', icon: '../../../img/icon-messages.png'},
                {title: 'Music', link: '/music', icon: '../../../img/icon-music.png'},
                {title: 'News', link: '/news', icon: '../../../img/icon-news.png'},
                {title: 'Settings', link: '/settings', icon: '../../../img/icon-settings.png'}
            ],
        },
        dialogPage: {
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
        },
        profilePage: {
            postData: [
                {id: 1, text: 'Hello, world!', likeCount: 15},
                {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
                {id: 3, text: 'This is my own social network!', likeCount: 18},

            ],
            newPost: '',
        },
        users: [
            {
                id: 1,
                firstName: 'Sergei',
                lastName: 'Kondrasiuk',
                address: 'Minsk',
                dob: '23 October',
                education: 'BSUIR\'13',
                avatar: '../../../../img/ava.jpg',
                website: 'http://localhost:3000'
            },
            {
                id: 2,
                firstName: 'Bill',
                lastName: 'Gates',
                address: 'Seattle',
                dob: '28 October',
                education: 'Harvard',
                avatar: '../../../../img/bill.jpg'
            },
            {
                id: 3,
                firstName: 'Mark',
                lastName: 'Zuckerberg',
                address: 'Palo Alto',
                dob: '14 May',
                education: 'Harvard',
                avatar: '../../../../img/mark.jpg'
            },
            {
                id: 4,
                firstName: 'Pavel',
                lastName: 'Durov',
                address: 'Global citizenship',
                dob: '10 October',
                education: 'SPbU',
                avatar: '../../../../img/pavel.jpg'
            },
        ],
    },

    getState() {
        return this._state;
    },

    _stateChanged() {
    },

    subscribe(subcriberFn) {
        this._stateChanged = subcriberFn;
    },

    dispatcher(action) {
        switch (action.type) {
            case 'ADD_POST':
                if (this._state.profilePage.newPost.trim()) {
                    let newPost = {id: 4, text: this._state.profilePage.newPost, likeCount: 0}
                    this._state.profilePage.postData.push(newPost);
                    this._state.profilePage.newPost = '';
                    this._stateChanged();
                }
                break;
            case 'UPDATE_NEW_POST' :
                this._state.profilePage.newPost = action.text;
                this._stateChanged();
                break;
            case 'SEND_MESSAGE' :
                if (this._state.dialogPage.dialogs[0].newMessage.trim()) {
                    let currentDate = new Date();
                    let currentYear = currentDate.getFullYear();
                    let currentMonth = ((currentDate.getMonth() + 1).toString().length === 1) ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
                    let currentDay = ((currentDate.getDate()).toString().length === 1) ? `0${currentDate.getDate()}` : currentDate.getDate();
                    let currentHours = ((currentDate.getHours()).toString().length === 1) ? `0${currentDate.getHours()}` : currentDate.getHours();
                    let currentMinutes = ((currentDate.getMinutes()).toString().length === 1) ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

                    let newMessage = {
                        id: 5,
                        content: this._state.dialogPage.dialogs[0].newMessage,
                        addedTime: `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}`,
                        type: 'outcoming',
                        author: {
                            id: 1,
                            name: 'Sergei',
                            avatar: '../../../../img/ava.jpg',
                        }
                    };
                    this._state.dialogPage.dialogs[0].messages.push(newMessage);
                    this._state.dialogPage.dialogs[0].newMessage = '';
                    this._stateChanged();
                }
                break;
            case 'UPDATE_NEW_MESSAGE':
                this._state.dialogPage.dialogs[0].newMessage = action.text;
                this._stateChanged();
                break;
            default:
                break;
        }

    }
};
        export default store;