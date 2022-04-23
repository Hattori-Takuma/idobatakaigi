import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './TkChat.css'
import MessageCard from '../components/MessageCard';

import IconButton from '@mui/material/IconButton'
import NorthWestIcon from '@mui/icons-material/NorthWest';
import { createDataInFirebase, db } from '../lib/firebase'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Gravatar from 'react-gravatar'

const TkChat = () => {

  const { name } = useParams()
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  const movePage = (path) => {
    navigate(`${path}`);
  }
  const [chat, setChat] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const scrollBottomRef = useRef(null);


  const createFunc = async () => {
    console.log('start')
    const res = await createDataInFirebase(name, message)
    console.log('fin', res)
    setMessage('')
  }

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesInfo = [];
      querySnapshot.forEach((doc) => {
        messagesInfo.push(doc.data());
      });
      setChat(messagesInfo)
    });
    return unsubscribe
  }, []);
  useLayoutEffect(() => {
    scrollBottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chat])


  const isOpenModal = () => {
    console.log("this is invoked")
    setIsOpen(!isOpen)
  }

  const UbModal = ({ name, isOpen, isOpenModal }) => {
    console.log("🚀 ~ file: UbModal.js ~ line 20 ~ UbModal ~ isOpen", isOpen)
    return (
      <div>
        <Modal
          open={isOpen}
          onClose={isOpenModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Gravatar
                email={name}
                style={{ borderRadius: "25px" }}
                size={40}
                default="wavatar"
                className="CustomAvatar-image"
                protocol="https://"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {name} さん
          </Typography>
          </Box>
        </Modal>
      </div>
    );
  }







  return (
    <div className="TkChatmain">

      <Button
        onClick={() => movePage("/tklogin")}>戻る<LogoutIcon /></Button><br />

      <div className="show-message-area" >
        {
          chat.map((chat, index) => {
            return <MessageCard key={index} message={chat.message} name={chat.name} />
          })
        }

        <div ref={scrollBottomRef}></div>

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
