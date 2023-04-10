import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Button, TextField } from '@mui/material';
import { addNewNode } from '../../../../../store/treeSlice';

export const AddContent = ({ handleCloseModal }) => {
  const disaptch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const { nodeName } = useSelector((state) => state.modalMenu.nodeInfo);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    handleCloseModal();
    disaptch(addNewNode({ newNodeName: inputValue, parentNode: nodeName }));
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Add child for {nodeName} node
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box p={4}>
          <TextField
            label="Name node"
            value={inputValue}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth={true}
            gutterBottom={4}
          />
        </Box>
        <Box display="flex" justifyContent="center" columnGap={4}>
          <Button
            variant="contained"
            type="submit"
            disabled={inputValue.trim() === ''}
          >
            Confirm
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
};
