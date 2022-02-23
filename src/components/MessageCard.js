import React from 'react'
import Avatar from '@mui/material/Avatar';
import "../styles/MessageCard.css"
const MessageCard = () => {
  return (
    <div className="messagecard-wrapper">
      <div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  )
}

export default MessageCard