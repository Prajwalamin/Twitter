import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import './tweetbox.css';
import db from './firebase';

function Tweetbox() {

    const [tweetmessage, setTweetmessage] = useState('');
    const [tweetImage, setTweetimage] = useState('');

    const pic = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

    const SendTweet = (e) => {
        e.preventDefault();

    
        db.collection('posts').add({
            pic: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            name: 'Prajwal',
            tag: 'prajwalmufc',
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
                    <Avatar className="tweetbox__avatar" src={pic}></Avatar>
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
