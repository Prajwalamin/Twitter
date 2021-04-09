import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import './tweetbox.css';
import { db, auth } from './firebase';
import 'firebase/auth'
import { } from './App'

function Tweetbox() {

    const {photoURL, displayName} = auth.currentUser;

    const [tweetmessage, setTweetmessage] = useState('');
    const [tweetImage, setTweetimage] = useState('');

    const SendTweet = (e) => {
        e.preventDefault();

    const tagname = `#${displayName}_twitter`

    
        db.collection('posts').add({
            pic: photoURL || "photo",
            name: displayName || "Guest",
            tag: tagname,
            message: tweetmessage,
            image: tweetImage,
        });

        setTweetmessage("");
        setTweetimage("");
        
    }

    return (
    
        <div className="tweetbox">
        <form>
            <div className="tweetbox__input">
                    <Avatar className="tweetbox__avatar" src={photoURL}></Avatar>
            <input 
            value={tweetmessage} 
            onChange={(e) => setTweetmessage(e.target.value)}
            placeholder="Whats Happening?"/>
            </div>
            
            <input 
            value={tweetImage}
            onChange={e => setTweetimage(e.target.value)}
            placeholder="Enter Image URL" className="image" />
            
            <button type="submit" disabled={!tweetmessage && !tweetImage} onClick={SendTweet} className="tweetbox__tweetbutton">Tweet</button>
        </form>
            
        </div>
    )
}

export default Tweetbox
