import React from 'react'
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const DialogUser = (props) => {


    return <div className={s.userName}>

        <span className={s.userChip}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                <Chip
                    avatar={
                        <Avatar alt="user avatar" src={props.avatar} style={{marginTop: '15px'}}/>
                    }
                    label={props.dialog}
                />
            </NavLink>
        </span>


        {!!props.newMessagesCount &&
        <Badge className={s.badge} badgeContent={props.newMessagesCount} color="primary">
            <MailIcon/>
        </Badge>
        }
    </div>
};

export default DialogUser;

