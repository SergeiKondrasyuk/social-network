import React from 'react';
import topimage from "../../img/topimage.jpg";
import ava from "../../img/ava.png";
import s from'./ProfilePage.module.css';


const ProfilePage = () => {
    return <div className={s.profile}>

        <div className={s.topImage}><img src={topimage}/></div>

        <div className={s.avatar}><img src={ava} className={s.topImage}/></div>

        <div className={s.profileInfo}>
            <div className={s.name}>Sergei K.</div>
            <br/>

            <div className={s.address}>City: Minsk</div>
            <div className={s.dob}>Date of Birth: 23 october</div>
            <div className={s.education}>Education: BSUIR'13</div>
            <div className={s.skype}>Skype: bender.cdf</div>
        </div>

        <div className={s.posts}>
            <div className={s.myPosts}>My posts</div>
            <div className={s.newPostForm}>
                <div className={s.newPost}>New post</div>
                <div><textarea placeholder='Enter you post...' className={s.newPostTextArea}></textarea></div>
                <div className={s.sendButton}>
                    <button>Send</button>
                </div>
            </div>

            <div className={s.oldPostsBlock}>
                <ul>
                    <li>
                        <div className={s.postContent}>
                            My own social network!
                        </div>
                    </li>
                    <li>
                        <div className={s.postContent}>
                            Hello world!
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>


}

export default ProfilePage;