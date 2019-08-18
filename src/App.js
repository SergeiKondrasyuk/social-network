import * as React from 'react'
import s from './App.module.css';
import DialogsPageContainer from "./components/DialogPage/DialogsPageContainer";
import Music from "./components/Music/Music"
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import NavContainer from "./components/Nav/NavContainer";
import FriendsBlockContainer from "./components/Nav/FriendsBlock/FriendsBlockContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#8fbc8f'
            },
            secondary: {
                main: '#00008B'
            },
        },
    });

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <ThemeProvider theme={this.theme}>
                    <div className={s.appWrapper}>

                        <div className={s.headerWrapper}>
                            <HeaderContainer/>
                        </div>

                        <div className={s.navWrapper}>
                            <NavContainer/>
                        </div>

                        {this.props.isAuth && <div className={s.friendsBlockWrapper}>
                            <FriendsBlockContainer/>
                        </div>}

                        <div className={s.contentWrapper}>
                            <Route exact path="/" render={() => (
                                <Redirect to="/profile"/>
                            )}/>
                            <Route path='/dialogs/:userId?' render={() => (<DialogsPageContainer/>)}/>
                            <Route path='/profile/:userId?' render={() => (<ProfilePageContainer/>)}/>
                            <Route exact path='/music' render={() => (<Music/>)}/>
                            <Route exact path='/users' render={() => (<UsersContainer/>)}/>
                            <Route exact path='/login' render={() => (<LoginContainer/>)}/>
                        </div>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);