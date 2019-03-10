import React from 'react';
import topimage from "../img/topimage.jpg";
import ava from "../img/ava.png";
import './ProfilePage.css';


const ProfilePage = () => {
    return <div className='profile'>

        <div className='topImage'><img src={topimage}/></div>

        <div className='avatar'><img src={ava} className='topImage'/></div>

        <div className='profileInfo'>
            <div className='name'>Sergei K.</div>
            <br/>

            <div className='address'>City: Minsk</div>
            <div className='dob'>Date of Birth: 23 october</div>
            <div className='education'>Education: BSUIR'13</div>
            <div className='skype'>Skype: bender.cdf</div>
        </div>

        <div className='posts'>
            <div className='myPosts'>My posts</div>
            <div className='newPostForm'>
                <div className='newPost'>New post</div>
                <div><textarea placeholder='Enter you post...' className='newPostTextArea'></textarea></div>
                <div className='sendButton'>
                    <button>Send</button>
                </div>
            </div>

            <div className='oldPostsBlock'>
                <ul>
                    <li>
                        <div className='postContent'>
                            My own social network!
                        </div>
                    </li>
                    <li>
                        <div className='postContent'>
                            Hello world!
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>


}

export default ProfilePage;