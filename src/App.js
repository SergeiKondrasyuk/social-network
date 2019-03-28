import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";
import Friends from "./components/Friends/Friends"
import Music from "./components/Music/Music"
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    let users = props.state.users;
    let navItems = props.state.nav.navItems;
    let postData = props.state.profilePage.postData;
    let addPost = props.addPost;
    let updateNewPost = props.updateNewPost;
    let dialogPage = props.state.dialogPage;
    let updateNewMessage = props.updateNewMessage;
    let sendMessage = props.sendMessage;

    debugger
    return (

        <BrowserRouter>
            <div className={s.appWrapper}>

                <div className={s.headerWrapper}>
                    <Header/>
                </div>

                <div className={s.navWrapper}>
                    <Nav navItems={navItems}/>
                </div>

                <div className={s.friendsWrapper}>
                    <Friends users={users}/>
                </div>

                <div className={s.contentWrapper}>
                    <Route path='/dialogs'
                           render={() => (<DialogPage dialogPage={dialogPage} sendMessage={sendMessage}
                                                      updateNewMessage={updateNewMessage}/>)}/>
                    <Route exact path='/profile'
                           render={() => (<ProfilePage users={users} postData={postData} addPost={addPost}
                                                       updateNewPost={updateNewPost}/>)}/>
                    <Route exact path='/music' render={() => (<Music/>)}/>
                </div>

            </div>
        </BrowserRouter>
    );

}


export default App;