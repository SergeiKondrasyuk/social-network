import React, {Fragment} from 'react'
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
import DialogPage from "./components/DialogsPage";


const App = () => {
    return (
        <div className='app-wrapper'>

            <Header/>

            <Nav/>

            <DialogPage/>

        </div>
    );

}


export default App;
