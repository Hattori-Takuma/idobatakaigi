import React, { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate, useParams } from 'react-router-dom';
import "./StChat.css"
import Snowfall from 'react-snowfall';
import MessageCard from '../components/MessageCard';
import { generateGravatar } from '../lib/gravator';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
const StChat = () => {
  const { name } = useParams()
  const [avatorUrl, setAvatorUrl ] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    //const url = generateGravatar()
    // console.log("🚀 ~ file: StChat.js ~ line 11 ~ useEffect ~ url", url)
    // setAvatorUrl(url)
  },[])
  const movePage = () => {
    navigate(`/stlogin`);
  }
  return (
    <div className="stchat-wrapper">
      <Snowfall />
      <div className="chat-area">
        <div className="show-message-area">
          <div>ShowMessage</div>
        </div>
        <div className="send-message-area">
          <TextField id="message" color="success" label="message" variant="standard" sx={{ width: '80vw' }} />
          <div className="btn-area">
            <IconButton color="success" component="span">
              <Send />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StChat;
