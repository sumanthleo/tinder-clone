import React from 'react'
import './Chat.css'
import { Avatar } from '@mui/material'

function Chat({ name , message , profilePic , timestamp }) {
    return (
        <div className="image-icon">
            <Avatar className="chat-image" src={profilePic} />
            <div className='chat-details'>
                <h2><b>{name}</b></h2>
               
                <p>{message}</p>
            </div>
            <p className="time">{timestamp}</p>
        </div>
    )
}

export default Chat

