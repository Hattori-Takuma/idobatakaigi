import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './TkChat.css'
import MessageCard from '../components/MessageCard';

import IconButton from '@mui/material/IconButton';

import NorthWestIcon from '@mui/icons-material/NorthWest';
import { createDataInFirebase } from '../lib/firebase'





const TkChat = () => {

  const { name } = useParams()
  const [message, setMessage] = useState("")
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
    <div className="TkChatmain">

      <Button
        onClick={() => movePage("/tklogin")}>戻る<LogoutIcon /></Button><br />



      <div>




        {/* <Button variant="outlined" color="success" onClick={createFunc}>
          DBへ保存
      </Button> */}
      </div>

      <div className="sent">
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
            <NorthWestIcon />
          </IconButton>
        </div>
      </div>



    </div>
  );
};

export default TkChat;
