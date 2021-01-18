import React from 'react'
import './Header.css'
import fb_icon from './header_img/facebook-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header_gauche">
                <img className="icon" src={fb_icon} alt="Facebook" />
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Rechercher sur Facebook" />
                </div>
            </div>
            <div className="header_centre">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div>

            </div>
            <div className="header_droite">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
