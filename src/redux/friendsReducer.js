let initialState = {
    friends: [
        {
            id: 1,
            firstName: 'Bill',
            lastName: 'Gates',
            avatar: '../../../../img/bill.jpg'
        },
        {
            id: 2,
            firstName: 'Mark',
            lastName: 'Zuckerberg',
            avatar: '../../../../img/mark.jpg'
            },
        {
            id: 3,
            firstName: 'Pavel',
            lastName: 'Durov',
            avatar: '../../../../img/pavel.jpg'
        },
    ],
};

const friendsReducer = (state = initialState, action) => {

    return state;
}

export default friendsReducer;