import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import {profileInfoRequest} from '../../redux/profilePageReducer';
import {getAuthReducer, getLoginReducer, getProfilePageReducer} from '../../redux/selectors';
import style from '../Users/User.module.css';
import Preloader from '../common/Preloader';
import {withRouter} from 'react-router-dom';


const ProfilePageContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            debugger
            userId = props.auth.userData.id;
        }
        props.profileInfoRequest(userId)
    }, [])

    if(!props.profilePage.profileInfo) {
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

let WithUrlDataContainerComponent= withRouter(ProfilePageContainer);

export default connect(mapDispatchToProps, {profileInfoRequest})(WithUrlDataContainerComponent);

