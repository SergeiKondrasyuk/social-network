import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    let users = props.state.user;
    let messages = props.state.messages;
    let avatars = props.state.avatars;
    let profile = props.state.profile;
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
                    <ProfilePage avatars={avatars} profile={profile} postData={postData}/>
                </div>

                {/*<Route path='/dialogs' component={DialogPage} users={users} messages={messages} avatars={avatars}/>
                    <Route path='/profile' component={ProfilePage} posts={posts} avatars={avatars} profile={profile} postsLikes={postsLikes}/>

<DialogPage users={users} messages={messages} avatars={avatars}/>
<ProfilePage posts={posts} avatars={avatars} profile={profile} postsLikes={postsLikes}/>*/}



            </div>
        </BrowserRouter>
            );

            }


            export default App;