import { Modal as ModalMU, Box } from '@mui/material';
import { AddContent, RenameContent, DeleteContent } from './components';
import { setSelectedMenuItem, cleanNodeInfo } from '../../../../store/modalMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import {styleBoxModal} from './styles';

export const Modal = () => {
  const dispatch = useDispatch();
  const {selectedMenuItem} = useSelector((state) => state.modalMenu);

  const handleCloseModal = () => {
    dispatch(setSelectedMenuItem(null));
    dispatch(cleanNodeInfo());
  };

  const generateBodyModal = () => {
    if (selectedMenuItem === 'add') return <AddContent handleCloseModal={handleCloseModal} />
    if (selectedMenuItem === 'rename') return <RenameContent handleCloseModal={handleCloseModal} />
    if (selectedMenuItem === 'delete') return <DeleteContent handleCloseModal={handleCloseModal} />
  }

  return (
    <ModalMU open={selectedMenuItem} onClose={handleCloseModal}>
      <Box sx={styleBoxModal}>
        {generateBodyModal()}
      </Box>
    </ModalMU>
  );
};
