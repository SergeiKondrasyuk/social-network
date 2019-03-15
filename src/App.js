import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";


const App = (props) => {
    let users = props.state.user;
    let messages = props.state.messages;
    let avatars  = props.state.avatars;
    let posts = props.state.posts;
    let postsLikes=props.state.postsLikes;
    let profile = props.state.profile;
    let navItems = props.state.navItems;


    return (
        <div className={s.appWrapper}>

            <Header/>

            <Nav navItems={navItems}/>

            {/*<DialogPage users={users} messages={messages} avatars={avatars} />*/}
            <ProfilePage posts={posts} avatars={avatars} profile={profile} postsLikes={postsLikes}/>
        </div>
    );

}


export default App;
