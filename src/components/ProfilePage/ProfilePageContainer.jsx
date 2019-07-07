import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import {getProfileInfo, getStatus} from '../../redux/profilePageReducer';
import {getAuthReducer, getLoginReducer, getProfilePageReducer} from '../../redux/selectors';
import style from '../Users/User.module.css';
import Preloader from '../common/Preloader';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {me} from '../../redux/authReducer';
import {RedirectToLogin} from "../../hocs/redirectToLogin";


class ProfilePageContainer extends Component {

    componentDidMount() {
        this.props.me();
        let userId = this.props.match.params.userId;
        debugger
        if (!userId) {
            userId = this.props.auth.userData.id;
        }
        this.props.profileInfoRequest(userId);
        this.props.getStatus(userId);
    }

    render() {
        debugger
        if (!this.props.profilePage.profileInfo) {
            return <div className={style.preloader}><Preloader/></div>
        }

        return <ProfilePage login={this.props.login}
                            auth={this.props.auth}
                            profileInfoRequest={this.props.profileInfoRequest}
                            profilePage={this.props.profilePage}
        />
    }
}

const mapDispatchToProps = (state) => {
    return {
        login: getLoginReducer(state),
        auth: getAuthReducer(state),
        profilePage: getProfilePageReducer(state),
    }
};


export default compose(
    connect(mapDispatchToProps, {profileInfoRequest: getProfileInfo, getStatus, me}),
    RedirectToLogin,
    withRouter
)(ProfilePageContainer);
