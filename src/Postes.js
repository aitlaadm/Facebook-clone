import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react'
import './Postes.css'
function Postes({ profile, image, username, timestamp, message }) {
    return (
        <div className='postes'>
            <div className='postes_top'>
                <Avatar src={profile} className="postes_avatar" />
                <div className='postes_topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='postes_bottom'>
                <p>{message}</p>
            </div>
            <div className='postes_images'>
                <img src={image} alt="" />
            </div>
            <div className="postes_options">
                <div className="postes_option">
                    <ThumbUpIcon fontSize="small" style={{ color: "gray" }} />
                    <p>J'aime</p>
                </div>
                <div className="postes_option">
                    <CommentIcon fontSize="small" style={{ color: "gray" }} />
                    <p>Commenter</p>
                </div>
                <div className="postes_option">
                    <ShareIcon fontSize="small" style={{ color: "grey" }} />
                    <p>Partager</p>
                </div>
            </div>
        </div>
    )
}

export default Postes
