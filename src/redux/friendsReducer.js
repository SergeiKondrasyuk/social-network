let initialState = {
    friends: [
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
};

const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;