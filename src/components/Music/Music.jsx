import React from 'react'
import s from './Music.module.css'
import PropTypes from "prop-types";

const Music = (props) => {

    return <div className={s.musicBlock}>
        <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115417954&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

    </div>
}

export default Music;

Music.propTypes = {
}