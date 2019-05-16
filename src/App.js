import React from 'react'
import s from './App.module.css';
import DialogsPageContainer from "./components/DialogPage/DialogsPageContainer";
import Music from "./components/Music/Music"
import {BrowserRouter, Route} from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import FriendsBlockContainer from "./components/Nav/FriendsBlock/FriendsBlockContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>

                <div className={s.headerWrapper}>
                    <HeaderContainer/>
                </div>

                <div className={s.navWrapper}>
                    <NavContainer/>
                </div>

                <div className={s.friendsBlockWrapper}>
                    <FriendsBlockContainer/>
                </div>

                <div className={s.contentWrapper}>
                    <Route path='/dialogs' render={() => (<DialogsPageContainer/>)}/>
                    <Route exact path='/profile/:userId?' render={() => (<ProfilePageContainer/>)}/>
                    <Route exact path='/music' render={() => (<Music/>)}/>
                    <Route exact path='/users' render={() => (<UsersContainer/>)}/>
                    <Route exact path='/login' render={() => (<LoginContainer/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );

};

export default App;