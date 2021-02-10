import React from 'react';
import './widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchicon"/>
                <input placeholder="Search Twitter"/>

            </div>

            <div className="widgets__widgetscontainer">
                <h2> Whats Happening ?</h2>
                <TwitterTweetEmbed tweetId={"1349786785233002496"}/>

                <TwitterTimelineEmbed
                source="profile"
                screenName="VOBmusic"
                options={{height:400}}/>
            </div>
        </div>
    )
}

export default widgets
