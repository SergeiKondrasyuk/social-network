import React from 'react';
import {statuses} from "../../redux/friendsReducer";
import * as axios from "axios";

const Friends = (props) => {

    let axiosInstance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
    });

    if (props.friends.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS);
        axiosInstance
            .get('users?count=30')
            .then((res) => {
                props.setStatus(statuses.SUCCESS);
                props.setFriends(res.data.items);
            });
        return <span>User not found</span>

    }

    if (!props.friends.friends.length) {
        return <div>You have no friends</div>
    }

    return <div>
        {props.friends.friends.map(friend =>

            <div>
                <img src={friend.photos.small == null ? 'https://via.placeholder.com/100' : friend.photos.small}/>
                <span>{friend.name}</span>
            </div>)}
    </div>
};


export default Friends;