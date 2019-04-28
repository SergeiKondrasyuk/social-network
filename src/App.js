import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";
import Music from "./components/Music/Music"
import {BrowserRouter, Route} from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import FriendsBlockContainer from "./components/Nav/FriendsBlock/FriendsBlockContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>

                <div className={s.headerWrapper}>
                    <Header/>
                </div>

                <div className={s.navWrapper}>
                    <NavContainer/>
                </div>

                <div className={s.friendsBlockWrapper}>
                    <FriendsBlockContainer/>
                </div>

                <div className={s.contentWrapper}>
                    <Route path='/dialogs' render={() => (<DialogPage/>)}/>
                    <Route exact path='/profile' render={() => (<ProfilePage/>)}/>
                    <Route exact path='/music' render={() => (<Music/>)}/>
                    <Route exact path='/friends' render={() => (<FriendsContainer/>)}/>

                </div>
            </div>
        </BrowserRouter>
    );

}


export default App;