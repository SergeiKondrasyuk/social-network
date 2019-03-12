import React, {Fragment} from 'react'
import s from './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DialogPage from "./components/DialogPage/DialogsPage";


const App = () => {

    let users = ['Maks','Dima','Anna','Vital','Svetlana','Victor','Alexander','Valery','Ludmila'];
    return (
        <div className={s.appWrapper}>

            <Header/>

            <Nav/>

            <DialogPage users={users}/>
            {/*<ProfilePage />*/}
        </div>
    );

}


export default App;
