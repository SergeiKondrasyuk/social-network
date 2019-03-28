let myState = {
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
}

export const addPost = () => {
    if (myState.profilePage.newPost.trim()) {
        let newPost = {id: 4, text: myState.profilePage.newPost, likeCount: 0}
        myState.profilePage.postData.push(newPost);
        myState.profilePage.newPost = '';
        functionForSubscriber();
    }
}

export const updateNewPost = (text) => {
    myState.profilePage.newPost = text;
}

export const sendMessage = () => {
    if (myState.dialogPage.dialogs[0].newMessage.trim()) {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = ((currentDate.getMonth() + 1).toString().length === 1) ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
        let currentDay = ((currentDate.getDate()).toString().length === 1) ? `0${currentDate.getDate()}` : currentDate.getDate();
        let currentHours = ((currentDate.getHours()).toString().length === 1) ? `0${currentDate.getHours()}` : currentDate.getHours();
        let currentMinutes = ((currentDate.getMinutes()).toString().length === 1) ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

        let newMessage = {
            id: 5,
            content: myState.dialogPage.dialogs[0].newMessage,
            addedTime: `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}`,
            author: {
                id: 1,
                name: 'Sergei',
                avatar: '../../../../img/ava.jpg',
            }
        }
        myState.dialogPage.dialogs[0].messages.push(newMessage);
        myState.dialogPage.dialogs[0].newMessage = '';
        functionForSubscriber();
    }
}

export const updateNewMessage = (text) => {
    myState.dialogPage.dialogs[0].newMessage = text;
}

let functionForSubscriber = () => {
};

export let subscribe = (subscriber) => functionForSubscriber = subscriber;

export default myState