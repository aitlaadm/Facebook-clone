import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'
function SidebarRow({ src, Icon, titre }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{titre}</h4>
        </div>
    )
}

export default SidebarRow
