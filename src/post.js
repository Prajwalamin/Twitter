import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css'

function post({pic,name,tag,message,image}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__pic" src={pic} />
                <h2 className="post__name">{name}</h2> 
                <h3 className="post__tag">@{tag}</h3>
            </div>
            <div className="post__message">
                <h4>{message}</h4>
            </div>
            <img src={image} 
            alt="" className="post__image" />
            
        </div>
    )
}

export default post
