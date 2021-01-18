import { Avatar } from '@material-ui/core'
import React from 'react'
import './Storie.css'
function Storie({ image, profile, titre }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="storie">
            <Avatar className='storie_avatar' src={profile} />
            <h4>{titre}</h4>
        </div>
    )
}

export default Storie
