import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    let users = props.state.users;
    let dialogUsers = props.state.dialogUsers;
    let messages = props.state.messages;
    let navItems = props.state.navItems;
    let postData = props.state.postData;
    let icons = props.state.icons;


    return (
        <BrowserRouter>
            <div className={s.appWrapper}>

                <div className={s.headerWrapper}>
                    <Header/>
                </div>

                <div className={s.navWrapper}>
                    <Nav navItems={navItems} icons={icons}/>
                </div>

                <div className={s.contentWrapper}>
                    <Route exact path='/dialogs'
                           render={() => (<DialogPage users={users} dialogUsers={dialogUsers} messages={messages}/>)}/>
                    <Route exact path='/profile' render={() => (<ProfilePage users={users} postData={postData}/>)}/>
                </div>

            </div>
        </BrowserRouter>
    );

}


export default App;