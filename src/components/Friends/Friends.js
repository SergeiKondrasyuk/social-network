import React from 'react';
import {statuses} from "../../redux/friendsReducer";
import * as axios from "axios";

const Friends = (props) => {


    if (props.friends.status === statuses.NOT_INITIALIZED){
        props.setStatus(statuses.INPROGRESS);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=30')
            .then((res)=>{
                props.setStatus(statuses.SUCCESS);
                props.setFriends(res.data.items);
            })


    }

    if(!props.friends.friends.length) {
        return <div>You have no friends</div>
    }

    return <div>
        {props.friends.friends.map(friend=>

            <div>
                <img src={friend.photos.small == null? 'https://via.placeholder.com/100': friend.photos.small}/>
                <span>{friend.name}</span>
            </div>)}
    </div>
};


export default Friends;