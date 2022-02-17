import React, { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate, useParams } from 'react-router-dom';
import "./StChat.css"
import Snowfall from 'react-snowfall';
import { generateGravatar } from '../lib/gravator';
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
      <button
        onClick={movePage}
      >戻る</button>
      <h1>{name}'s page</h1>
      {/* <Avatar alt="Remy Sharp" src={avatorUrl} /> */}
    </div>
  );
};

export default StChat;
