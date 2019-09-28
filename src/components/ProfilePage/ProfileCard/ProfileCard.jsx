import React, {Component} from 'react';
import s from './ProfileCard.module.css';
import anonymousUser from '../../../img/anonymous-user.png';
import ProfileStatus from "./ProfileStatus";

class ProfileCard extends Component {

    state = {
        profileEditMode: false,
    };

    changeProfileEditMode = (value) => {
        this.setState({profileEditMode: value});
    };

    onSaveButtonClick = () => {
        this.props.putProfileInfo(this.props.profileInfo);
        this.setState({profileEditMode: false});
    };

    onCancelButtonClick = () => {
        this.props.getProfileInfo(this.props.meId);
        this.setState({profileEditMode: false});
    };

    render() {
        let profileInfo = this.props.profileInfo;
        let meId = this.props.meId;
        let aboutMeRef = React.createRef();
        let fullNameRef = React.createRef();
        let lookingForAJobRef = React.createRef();
        let JobDescriptionRef = React.createRef();

        let onAboutMeChange = () => this.props.onAboutMeChange(aboutMeRef.current.value);
        let onFullNameChange = () => this.props.onFullNameChange(fullNameRef.current.value);
        let onlookingForAJobChange = () => this.props.setLookingForAJobStatus(lookingForAJobRef.current.checked);
        let onJobDescriptionChange = () => this.props.onJobDescriptionChange(JobDescriptionRef.current.value);

        let onLoadPhotoButtonClick = () => {
            let formData = new FormData();
            let imageFile = document.querySelector('#load_avatar');
            formData.append('image', imageFile.files[0]);
            this.props.uploadPhoto(formData);
        };


        return <>{profileInfo && (<div className={s.profileCard}>
            <div className={s.avatar}><img alt='User avatar'
                                           src={profileInfo.photos.large == null ? anonymousUser : profileInfo.photos.large}/>
                {this.state.profileEditMode &&
                <input type='file' accept=".jpg, .jpeg, .png" id='load_avatar' name='load_avatar'/>}
                {this.props.profilePage.updatePhotoErrorMessage == null ? null :
                    <div style={{color: 'red'}}>{this.props.profilePage.updatePhotoErrorMessage}</div>}
            </div>

            {this.state.profileEditMode && <button onClick={onLoadPhotoButtonClick}>load photo</button>}

            <div className={s.profileInfo}>

                <div className={s.name}>
                    {this.state.profileEditMode ? <input onChange={onFullNameChange} value={profileInfo.fullName}
                                                         ref={fullNameRef}/> :
                        <span>{profileInfo.fullName} </span>}

                    {(profileInfo.userId === meId) &&
                    <button onClick={() => this.changeProfileEditMode(true)}>edit</button>}
                </div>
                <ProfileStatus updateStatus={this.props.updateStatus} status={this.props.status}/>
                <div>
                    <span><b>About me: </b></span>{this.state.profileEditMode ?
                    <input onChange={onAboutMeChange} value={profileInfo.aboutMe}
                           ref={aboutMeRef}/> :
                    <span>{profileInfo.aboutMe}</span>}
                </div>

                <div><span><b>Looking for a job </b></span>{this.state.profileEditMode ?
                    <input type='checkbox' onChange={onlookingForAJobChange} checked={profileInfo.lookingForAJob}
                           ref={lookingForAJobRef}/> :
                    <input type='checkbox' checked={profileInfo.lookingForAJob}/>}</div>

                <div><span><b>My skills: </b></span>{this.state.profileEditMode ?
                    <input onChange={onJobDescriptionChange} value={profileInfo.lookingForAJobDescription}
                           ref={JobDescriptionRef}/> :
                    <span>{profileInfo.lookingForAJobDescription}</span>}</div>

            </div>

            <div className={s.contacts}>
                {Object.keys(profileInfo.contacts).map(key => {
                    return <div><b>{key}: </b>
                        {this.state.profileEditMode ?
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
            {this.state.profileEditMode
            && <>
                <button onClick={this.onSaveButtonClick}>Save</button>
                <button onClick={this.onCancelButtonClick}>Cancel</button>
            </>

            }


        </div>)}</>


    }
}

export default ProfileCard;

ProfileCard.propTypes = {};