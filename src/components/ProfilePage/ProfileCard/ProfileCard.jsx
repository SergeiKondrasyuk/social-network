import React, {Component} from 'react';
import s from './ProfileCard.module.css';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";


class ProfileCard extends Component {

    componentDidMount() {
        this.props.profileInfoRequest(this.props.match.params.userId)
    }

    render() {

        let {editMode, profileInfo, meIdRequest} = this.props.profilePage;

        let onSaveButtonClick = () => this.props.profileInfoPutRequest(profileInfo);
        return <div className={s.profileCard}>
            <div className={s.avatar}><img alt='User avatar' src={profileInfo.photos.large}/></div>

            <div className={s.profileInfo}>
                <div className={s.name}><span>{profileInfo.fullName}</span></div>
                {(profileInfo.userId === meIdRequest && profileInfo.userId && meIdRequest) &&
                <button onClick={this.props.setEditModeStatus}>edit</button>}
                {Object.keys(this.props.profilePage.profileInfo.contacts).map(key => {
                    return <div><b>{key}: </b>
                        {editMode ?
                            <input onChange={(e) => {
                                let value = e.target.value;
                                this.props.onContactChange(value, key)
                            }}
                                   value={profileInfo.contacts[key]}/> :
                            <span>{profileInfo.contacts[key]}</span>}
                    </div>
                })}
                {editMode && <button onClick={onSaveButtonClick}>Save</button>}
            </div>

        </div>


    }
}

export default withRouter(ProfileCard);

ProfileCard.propTypes = {

};