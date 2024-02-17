import React from 'react';
import { Modal, Typography, Box } from '@mui/material';
import Card from '../Card';

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div className="modal-body">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Card />
        </div>
    </Modal>
  )
}

export default ModalDialog;