import React from 'react';
import './sidebar.css';
import Sidebaroptions from './sidebaroptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Note from '@material-ui/icons/Notifications';
import Message from '@material-ui/icons/Message';
import Bookmark from '@material-ui/icons/Bookmark';
import Lists from '@material-ui/icons/ListAlt';
import More from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function sidebar() {

    return (
        <div className='sidebar'>

            <TwitterIcon className='sidebar__twitter' fontSize="large"/>
            <Sidebaroptions active Icon={HomeIcon} text="Home"/>
            <Sidebaroptions Icon={SearchIcon} text="Explore" />
            <Sidebaroptions Icon={Note} text="Notifications" />
            <Sidebaroptions Icon={Message} text="Message" />
            <Sidebaroptions Icon={Bookmark} text="Bookmarks" />
            <Sidebaroptions Icon={Lists} text="Lists" />
            <Sidebaroptions Icon={More} text="More" />

            {/* tweet Button */}
            {/* <Input fullWidth placeholder='......'> </Input>  */}
            <Button className='sidebar__tweet' variant="outlined" fullWidth>Tweet</Button> 
            
        </div>
    )
}

export default sidebar
