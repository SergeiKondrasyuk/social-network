import React, {Component} from 'react';
import s from './ProfileCard.module.css';
import {withRouter} from "react-router-dom";
import anonymousUser from "../../../img/anonymous-user.png";

class ProfileCard extends Component {

    componentDidMount() {
        this.props.profileInfoRequest(this.props.match.params.userId)
    }

    render() {

        let {editMode, profileInfo, meIdRequest} = this.props.profilePage;
        let aboutMeRef = React.createRef();
        let fullNameRef = React.createRef();
        let lookingForAJobRef = React.createRef();
        let JobDescriptionRef = React.createRef();

        let onAboutMeChange = () => this.props.onAboutMeChange(aboutMeRef.current.value);
        let onFullNameChange = () => this.props.onFullNameChange(fullNameRef.current.value);
        let onlookingForAJobChange = () => this.props.setLookingForAJobStatus(lookingForAJobRef.current.checked);
        let onJobDescriptionChange = () => this.props.onJobDescriptionChange(JobDescriptionRef.current.value);
        let onSaveButtonClick = () => this.props.profileInfoPutRequest(profileInfo);
        let onLoadPhotoButtonClick = () => {
            let formData = new FormData();
            let imageFile = document.querySelector('#load_avatar');
            formData.append('image', imageFile.files[0]);
            this.props.uploadPhotoRequest(formData, profileInfo.userId);
            debugger
            //this.props.profileInfoRequest(this.props.match.params.userId);
        };


        return <>{profileInfo && (<div className={s.profileCard}>
            <div className={s.avatar}><img alt='User avatar'
                                           src={profileInfo.photos.large == null ? anonymousUser : profileInfo.photos.large}/>
                {editMode && <input type='file' accept=".jpg, .jpeg, .png" id='load_avatar' name='load_avatar'/>}
                {this.props.profilePage.errorMessage == null ? null : <div>{this.props.profilePage.errorMessage}</div>}
            </div>

            {editMode && <button onClick={onLoadPhotoButtonClick}>load photo</button>}

            <div className={s.profileInfo}>

                <div className={s.name}>
                    {editMode ? <input onChange={onFullNameChange} value={profileInfo.fullName}
                                       ref={fullNameRef}/> :
                        <span>{profileInfo.fullName}</span>}

                    {(profileInfo.userId === meIdRequest && profileInfo.userId && meIdRequest) &&
                    <button onClick={this.props.setEditModeStatus}>edit</button>}
                </div>

                <div><span><b>About me: </b></span>{editMode ?
                    <input onChange={onAboutMeChange} value={profileInfo.aboutMe}
                           ref={aboutMeRef}/> :
                    <span>{profileInfo.aboutMe}</span>}</div>

                <div><span><b>Looking for a job </b></span>{editMode ?
                    <input type='checkbox' onChange={onlookingForAJobChange} checked={profileInfo.lookingForAJob}
                           ref={lookingForAJobRef}/> :
                    <input type='checkbox' checked={profileInfo.lookingForAJob}/>}</div>

                <div><span><b>My skills: </b></span>{editMode ?
                    <input onChange={onJobDescriptionChange} value={profileInfo.lookingForAJobDescription}
                           ref={JobDescriptionRef}/> :
                    <span>{profileInfo.lookingForAJobDescription}</span>}</div>

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


        </div>)}</>


    }
}

export default withRouter(ProfileCard);

ProfileCard.propTypes = {};