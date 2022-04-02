import React from 'react'
import Gravatar from 'react-gravatar'
// import UbModal from '../components/UbModal';
import "../styles/MessageCard.css"
const MessageCard = ({ name, message, isOpen, isOpenModal }) => {
  return (
    <div className="messagecard-wrapper">
      {/* <UbModal name={name} isOpen={isOpen} isOpenModal={isOpenModal} /> */}
      <div className="content-area">
        <div className="icon-area">
          <Gravatar
            email={name}
            style={{ borderRadius: "25px" }}
            size={40}
            default="wavatar"
            className="CustomAvatar-image"
            protocol="https://"
            onClick={isOpenModal}
          />
        </div>
        <div className="message-area">
          <h4>{name}</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageCard