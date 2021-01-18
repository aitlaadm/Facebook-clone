import { ExpandMoreOutlined } from '@material-ui/icons'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} titre={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} titre='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} titre='Pages' />
            <SidebarRow Icon={PeopleIcon} titre='Amis' />
            <SidebarRow Icon={ChatIcon} titre='Messenger' />
            <SidebarRow Icon={StorefrontIcon} titre='Place du Marché' />
            <SidebarRow Icon={VideoLibraryIcon} titre='Vidéos' />
            <SidebarRow Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
