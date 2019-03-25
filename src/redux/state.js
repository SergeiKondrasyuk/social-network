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
    dialogUsers: ['Maks', 'Bill', 'Anna', 'Vital', 'Svetlana', 'Victor', 'Alexander', 'Valery', 'Ludmila'],
    messages: ['Hello', 'Hi!', 'how is your progress in learning  REACT?', 'Very good!'],
    postData: [
        {id: 1, text: 'Hello, world!', likeCount: 15},
        {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
        {id: 3, text: 'This is my own social network!', likeCount: 18},
    ],
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

export default myState