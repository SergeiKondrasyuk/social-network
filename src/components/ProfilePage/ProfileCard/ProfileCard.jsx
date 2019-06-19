import React, {Component} from 'react';
import s from './ProfileCard.module.css';
import anonymousUser from '../../../img/anonymous-user.png';

class ProfileCard extends Component {

    state = {
        statusEditMode: false,
        statusValue: this.props.profilePage.profileStatus,
    };

    onStatusBlurEvent = () => {
        this.setState({statusEditMode: false});
        if (this.props.profilePage.profileStatus !== this.state.statusValue) {
            this.props.updateStatus(this.state.statusValue);
        }
    };

    onStatusClickEvent = () => {
        this.setState({statusEditMode: true,}, () => {
            //statusInputRef.current.focus();
        });
    };

    onStatusChange = (e) => {
        this.setState({statusValue: e.currentTarget.value });
    };


    render() {
        let {editMode, profileInfo, profileStatus} = this.props.profilePage;
        let meId = this.props.auth.userData.id
        let aboutMeRef = React.createRef();
        let fullNameRef = React.createRef();
        let lookingForAJobRef = React.createRef();
        let JobDescriptionRef = React.createRef();
        let statusInputRef = React.createRef();

        let onAboutMeChange = () => this.props.onAboutMeChange(aboutMeRef.current.value);
        let onFullNameChange = () => this.props.onFullNameChange(fullNameRef.current.value);
        let onlookingForAJobChange = () => this.props.setLookingForAJobStatus(lookingForAJobRef.current.checked);
        let onJobDescriptionChange = () => this.props.onJobDescriptionChange(JobDescriptionRef.current.value);
        let onSaveButtonClick = () => this.props.putProfileInfo(profileInfo);

        let onLoadPhotoButtonClick = () => {
            let formData = new FormData();
            let imageFile = document.querySelector('#load_avatar');
            formData.append('image', imageFile.files[0]);
            this.props.uploadPhoto(formData);
        };


        return <>{profileInfo && (<div className={s.profileCard}>
            <div className={s.avatar}><img alt='User avatar'
                                           src={profileInfo.photos.large == null ? anonymousUser : profileInfo.photos.large}/>
                {editMode && <input type='file' accept=".jpg, .jpeg, .png" id='load_avatar' name='load_avatar'/>}
                {this.props.profilePage.updatePhotoErrorMessage == null ? null :
                    <div style={{color: 'red'}}>{this.props.profilePage.updatePhotoErrorMessage}</div>}
            </div>

            {editMode && <button onClick={onLoadPhotoButtonClick}>load photo</button>}

            <div className={s.profileInfo}>

                <div className={s.name}>
                    {editMode ? <input onChange={onFullNameChange} value={profileInfo.fullName}
                                       ref={fullNameRef}/> :
                        <span>{profileInfo.fullName} </span>}

                    {(profileInfo.userId === meId) &&
                    <button onClick={this.props.setEditModeStatus}>edit</button>}
                </div>
                <div>
                    <span><b>Status: </b></span>{this.state.statusEditMode
                    ? <input value={this.state.statusValue} onBlur={this.onStatusBlurEvent}
                             ref={statusInputRef} autoFocus={true} onChange={this.onStatusChange}/>
                        : <span onClick={this.onStatusClickEvent} style={{cursor: 'pointer'}}>{profileStatus}</span>}
                </div>
                <div>
                    <span><b>About me: </b></span>{editMode ?
                    <input onChange={onAboutMeChange} value={profileInfo.aboutMe}
                           ref={aboutMeRef}/> :
                    <span>{profileInfo.aboutMe}</span>}
                </div>

                <div><span><b>Looking for a job </b></span>{editMode ?
                    <input type='checkbox' onChange={onlookingForAJobChange} checked={profileInfo.lookingForAJob}
                           ref={lookingForAJobRef}/> :
                    <input type='checkbox' checked={profileInfo.lookingForAJob}/>}</div>

                <div><span><b>My skills: </b></span>{editMode ?
                    <input onChange={onJobDescriptionChange} value={profileInfo.lookingForAJobDescription}
                           ref={JobDescriptionRef}/> :
                    <span>{profileInfo.lookingForAJobDescription}</span>}</div>

            </div>

            <div className={s.contacts}>
                {Object.keys(profileInfo.contacts).map(key => {
                    return <div><b>{key}: </b>
                        {editMode ?
                            <input type='url' onChange={(e) => {
                                let value = e.target.value;
                                this.props.onContactChange(value, key)
                            }}
                                   value={profileInfo.contacts[key]}/> :
                            <span>{profileInfo.contacts[key]}</span>}
                    </div>
                })}
                {this.props.profilePage.updateProfileErrorMessage == null ? null :
                    <div style={{color: 'red'}}>{this.props.profilePage.updateProfileErrorMessage}</div>}
            </div>
            {editMode && <button onClick={onSaveButtonClick}>Save</button>}


        </div>)}</>


    }
}

export default ProfileCard;

ProfileCard.propTypes = {};