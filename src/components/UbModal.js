import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Gravatar from 'react-gravatar'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UbModal({name, isOpen, isOpenModal}) {
  console.log("🚀 ~ file: UbModal.js ~ line 20 ~ UbModal ~ isOpen", isOpen)
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={isOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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