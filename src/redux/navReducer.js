let initialState =
    {
        navItems: [
            {title: 'Profile', link: '/profile', icon: '../../../img/icon-profile.png'},
            {title: 'Messages', link: '/dialogs', icon: '../../../img/icon-messages.png'},
            {title: 'Music', link: '/music', icon: '../../../img/icon-music.png'},
            {title: 'News', link: '/news', icon: '../../../img/icon-news.png'},
            {title: 'Settings', link: '/settings', icon: '../../../img/icon-settings.png'}
        ],
    }
;

const navReducer = (state = initialState, action) => {

    return state;
}

export default navReducer;