import React, { useState, useEffect, useRef,useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageCard from '../components/MessageCard';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Send from '@mui/icons-material/Send';
import { db, createDataInFirebase } from '../lib//firebase';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import UbModal from '../components/UbModal';
import "./StChat.css"
const StChat = () => {
  const { name } = useParams()
  const [message, setMessage] = useState("");
  const [isOpen,setIsOpen] = useState(false)
  const [chatData, setChatData] = useState([])
  const scrollBottomRef = useRef(null);
  
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesInfo = [];
      querySnapshot.forEach((doc) => {
        messagesInfo.push(doc.data());
      });
      setChatData(messagesInfo)
    });
    return unsubscribe
  }, []);

  useLayoutEffect(() => {
    scrollBottomRef.current.scrollIntoView({behavior: 'smooth'});
  },[chatData])

  const sendMessage = async () => {
    const result = await createDataInFirebase(name, message)
    console.log("🚀 ~ file: StChat.js ~ line 19 ~ sendMessage ~ result", result)
    setMessage('')
  }

  const isOpenModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="stchat-wrapper">
      <UbModal name={name} isOpen={isOpen} isOpenModal={isOpenModal} />
      <div className="chat-area">
        <div
          className="show-message-area"
        >
          {
            chatData.map((chat, index) => {
              return (
                  <MessageCard
                    key={index.toString()}
                    message={chat.message}
                    name={chat.name}
                    isOpen={isOpen}
                    isOpenModal={isOpenModal}
                  />
                )
            })
          }
          <div ref={scrollBottomRef}></div>
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
