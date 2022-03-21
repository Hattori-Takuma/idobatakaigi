import React, { useState } from 'react';
import { useParams,useNavigate } from "react-router-dom";
//import TextField from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import MessageCard from '../components/MessageCard';
import { createDataInFirebase } from '../lib/firebase'
import Button from '@mui/material/Button';
import './BtChat.css'

const BtChat = () => {

  const { name } = useParams()
  const [message, setMessage] = useState("")
  const [avatorUrl, setAvatorUrl ] = useState("")
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }

  const createFunc = async () => {
    console.log('start')
    const res = await createDataInFirebase(name, message)
    console.log('fin', res)
    setMessage('')
  }

  return (
  <div>
      <div className="BtChatmain">

      <Button onClick={() => movePage("/btlogin")}>戻る</Button><br />

      </div>
      <div className="chat-area">
      
      </div>
      <div className="send-message-area">
      <div className="name">{name}</div>
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
            <IconButton onClick={createFunc} color="success" component="span">
              <Send />
            </IconButton>
          </div>
        </div>
  </div>
  );
};

export default BtChat;