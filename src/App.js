import React, {Fragment} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";


const App = () => {
    return (
        <div className='app-wrapper'>

            <Header/>

            <Nav/>

            {/*<DialogPage />*/}
            <ProfilePage />
        </div>
    );

}


export default App;
