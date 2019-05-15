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
        let aboutMeRef = React.createRef();
        let fullNameRef = React.createRef();
        let lookingForAJobRef = React.createRef();
        let onAboutMeChange = () => {
            this.props.onAboutMeChange(aboutMeRef.current.value)
        };
        let onFullNameChange = () => {
            this.props.onFullNameChange(fullNameRef.current.value)
        };
        let onlookingForAJobChange = () => {
            this.props.setLookingForAJobStatus(lookingForAJobRef.current.checked)
        };
        let onSaveButtonClick = () => this.props.profileInfoPutRequest(profileInfo);
        return <div className={s.profileCard}>
            <div className={s.avatar}><img alt='User avatar' src={profileInfo.photos.large}/></div>

            <div className={s.profileInfo}>
                <div className={s.name}>
                    {editMode ? <input onChange={onFullNameChange} value={profileInfo.fullName}
                                       ref={fullNameRef}/> :
                        <span>{profileInfo.fullName}</span>} {(profileInfo.userId === meIdRequest && profileInfo.userId && meIdRequest) &&
                <button onClick={this.props.setEditModeStatus}>edit</button>}</div>

                <div><span><b>About me: </b></span>{editMode ?
                    <input onChange={onAboutMeChange} value={profileInfo.aboutMe}
                           ref={aboutMeRef}/> :
                    <span>{profileInfo.aboutMe}</span>}</div>
                <div><span><b>Looking for a job </b></span>{editMode ?
                    <input type='checkbox' onChange={onlookingForAJobChange} value={profileInfo.lookingForAJob}
                           ref={lookingForAJobRef}/> :
                    <input type='checkbox' checked={profileInfo.lookingForAJob}></input>}</div>
            </div>

            <div className={s.contacts}>{Object.keys(profileInfo.contacts).map(key => {
                return <div><b>{key}: </b>
                    {editMode ?
                        <input onChange={(e) => {
                            let value = e.target.value;
                            this.props.onContactChange(value, key)
                        }}
                               value={profileInfo.contacts[key]}/> :
                        <span>{profileInfo.contacts[key]}</span>}
                </div>
            })}</div>
            {editMode && <button onClick={onSaveButtonClick}>Save</button>}


        </div>


    }
}

export default withRouter(ProfileCard);

ProfileCard.propTypes = {};