import { useState } from 'react';
import { Modal as ModalMU, Box, Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTreeEventLog,
  isMatchesCurrentAndSelectedVersion,
} from '../../../../store/eventLogSlice';
import { setTree } from '../../../../store/treeSlice';
import { formatDate } from '../../helpers/formatDate';
import { styleBoxModal } from './styles';

export const Rollback = () => {
  const dispatch = useDispatch();
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const { versionNumber, tree, date } = useSelector(selectTreeEventLog);
  const isDisabledBtn = useSelector(isMatchesCurrentAndSelectedVersion);

  const handleClickRollback = () => {
    setIsOpenConfirm(true);
  };

  const handleCloseConfirmModal = () => {
    setIsOpenConfirm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTree(tree));
    setIsOpenConfirm(false);
  };

  const handleCancel = () => {
    setIsOpenConfirm(false);
  };

  return (
    <Box marginTop={'9px'}>
      <Button
        variant="contained"
        onClick={handleClickRollback}
        disabled={isDisabledBtn}
      >
        Rollback diagram to version:{versionNumber}
      </Button>
      <ModalMU open={isOpenConfirm} onClose={handleCloseConfirmModal}>
        <Box sx={styleBoxModal}>
          <Typography variant="h6" align="center" gutterBottom>
            Do you really want rollback to version:{versionNumber},{' '}
            {formatDate(date)}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              justifyContent="center"
              columnGap={4}
              marginTop={4}
            >
              <Button variant="contained" type="submit">
                Rollback
              </Button>
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </ModalMU>
    </Box>
  );
};
