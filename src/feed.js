import React from 'react';
import { useEffect, useState} from 'react';
import './feed.css';
import Tweetbox from './tweetbox';
import Post from './post.js';
import { db, auth } from './firebase';
import { Button } from '@material-ui/core';
import Exit from '@material-ui/icons/ExitToApp';


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot( snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
            ))
        
    }, [])

    return (
        <div className='feed'>
            {/* Header Part  */}
            <div className='header'>
                <h2> Home </h2>
                <div className="Signout">   
                    <Button onClick={() => auth.signOut()} disabled={!auth.currentUser}> <Exit className="button" fontSize="Medium"/> </Button>
                </div>
            </div>

            <Tweetbox/>

            {posts.map((post) => (
             

                <Post 
                pic={post.pic}
                name={post.name}
                tag={post.tag}
                message={post.message}
                image={post.image}   
                />
            )
            )}
            

        </div>
    )
}

export default Feed;
