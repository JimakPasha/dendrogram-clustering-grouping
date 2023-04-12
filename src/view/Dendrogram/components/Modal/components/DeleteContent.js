import { Typography, Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNode } from '../../../../../store/treeSlice';

export const DeleteContent = ({ handleCloseModal }) => {
  const disaptch = useDispatch();
  const { nodeId, parentId, nodeName } = useSelector(
    (state) => state.modalMenu.nodeInfo
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
    disaptch(deleteNode(nodeId));
  };

  const handleCancel = () => {
    handleCloseModal();
  };

  return (
    <>
      {parentId ? (
        <>
          <Typography variant="h6" align="center" gutterBottom>
            Delete {nodeName} node?
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              justifyContent="center"
              columnGap={4}
              marginTop={4}
            >
              <Button variant="contained" color="error" type="submit">
                Delete
              </Button>
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
          </form>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          rowGap={4}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Cannot delete root node
          </Typography>
          <Button variant="contained" onClick={handleCancel}>
            Ok
          </Button>
        </Box>
      )}
    </>
  );
};
