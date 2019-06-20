import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import {getProfileInfo, getStatus} from '../../redux/profilePageReducer';
import {getAuthReducer, getLoginReducer, getProfilePageReducer} from '../../redux/selectors';
import style from '../Users/User.module.css';
import Preloader from '../common/Preloader';
import {withRouter} from 'react-router-dom';
import {RedirectToLogin} from '../../hocs/RedirectToLogin';
import {compose} from 'redux';


const ProfilePageContainer = (props) => {

    useEffect(() => {
        debugger
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.auth.userData.id;
        }
        props.profileInfoRequest(userId);
        props.getStatus(userId);
    }, [])

    if (!props.profilePage.profileInfo) {
        return <div className={style.preloader}><Preloader/></div>
    }

    return <ProfilePage login={props.login}
                        auth={props.auth}
                        profileInfoRequest={props.profileInfoRequest}
                        profilePage={props.profilePage}
    />

};

const mapDispatchToProps = (state) => {
    return {
        login: getLoginReducer(state),
        auth: getAuthReducer(state),
        profilePage: getProfilePageReducer(state),
    }
};


export default compose(
    connect(mapDispatchToProps, {profileInfoRequest: getProfileInfo, getStatus}),
    RedirectToLogin,
    withRouter
)(ProfilePageContainer);
