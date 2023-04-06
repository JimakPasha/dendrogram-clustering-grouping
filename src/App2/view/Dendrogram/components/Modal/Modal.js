import { Typography, Modal as ModalMU, Box } from '@mui/material';
import { setCloseModal } from '../../../../store/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = () => {
  const disaptch = useDispatch();
  const isOpen = useSelector((state) => state.state.modal);
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

  const handleCloseModal = () => {
    disaptch(setCloseModal());
  };

  return (
    <ModalMU open={isOpen} onClose={handleCloseModal}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </ModalMU>
  );
};
