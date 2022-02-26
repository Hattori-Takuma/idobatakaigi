import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
//import TextField from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import MessageCard from '../components/MessageCard';
import './BtChat.css'

const BtChat = () => {

  const { name } = useParams()
  const [message, setMessage] = useState("")
  const [avatorUrl, setAvatorUrl ] = useState("")

  const sendMessage = () => {
    setMessage('')
  }

  return (
  <div>
    <div className="BtChat-wrapper">

      <h1>チャットページ(tomoya)</h1>
      <h2>名前・{name}</h2>

    </div>
    <div className="chat-area">
      <div className="show-message-area">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
      </div>
      </div>
      <div className="send-message-area">
          <TextField
            id="message"
            value={message}
            color="success"
            label="message"
            variant="standard"
            sx={{ width: '80vw' }}
            onChange={e => setMessage(e.target.value)}
          />
          <div className="btn-area">
            <IconButton onClick={sendMessage} color="success" component="span">
              <Send />
            </IconButton>
          </div>
        </div>
  </div>
  );
};

export default BtChat;
