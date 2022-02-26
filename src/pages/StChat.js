import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./StChat.css"
import Snowfall from 'react-snowfall';
import MessageCard from '../components/MessageCard';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
const StChat = () => {
  const { name } = useParams()
  const [message, setMessage] = useState("")
  const [avatorUrl, setAvatorUrl ] = useState("")
  const navigate = useNavigate();

  const movePage = () => {
    navigate(`/stlogin`);
  }

  const sendMessage = () => {
    setMessage('')
  }

  return (
    <div className="stchat-wrapper">
      <Snowfall />
      <div className="chat-area">
        <div className="show-message-area">
          <MessageCard message="Hello world" name="satake" />
          <MessageCard message="Hello world" name="takuma" />
          <MessageCard message="Hello world" name="batayan" />
          <MessageCard message="Hello world" name="satakeyu" />
          <MessageCard message="Hello world" name="satake" />
          <MessageCard message="Hello world" name="takuma" />
          <MessageCard message="Hello world" name="batayan" />
          <MessageCard message="Hello world" name="satakeyu" />
          <MessageCard message="Hello world" name="satake" />
          <MessageCard message="Hello world" name="takuma" />
          <MessageCard message="Hello world" name="batayan" />
          <MessageCard message="Hello world" name="satakeyu" />
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
    </div>
  );
};

export default StChat;
