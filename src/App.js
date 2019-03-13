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

    return (
        <div className={s.appWrapper}>

            <Header/>

            <Nav/>

            {/*<DialogPage users={users} messages={messages} avatars={avatars}/>*/}
            <ProfilePage />
        </div>
    );

}


export default App;
