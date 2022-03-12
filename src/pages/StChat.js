import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MessageCard from '../components/MessageCard';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import UbModal from '../components/UbModal';
import { createDataInFirebase } from '../lib//firebase';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../lib/firebase';
import "./StChat.css"
const StChat = () => {
  const { name } = useParams()
  const [message, setMessage] = useState("")
  const [avatorUrl, setAvatorUrl] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "users"))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      });
    });
  }, [])

  const sendMessage = async () => {
    const result = await createDataInFirebase(name, message)
    console.log("🚀 ~ file: StChat.js ~ line 19 ~ sendMessage ~ result", result)
    setMessage('')
  }

  const isOpenModal = () => {
    console.log("this is invoked")
    setIsOpen(!isOpen)
  }

  return (
    <div className="stchat-wrapper">
      <UbModal name={name} isOpen={isOpen} isOpenModal={isOpenModal} />
      <div className="chat-area">
        <div className="show-message-area">
          <MessageCard message="Hello world" name="satake" isOpenModal={isOpenModal} />
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
