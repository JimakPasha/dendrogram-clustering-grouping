import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Backdrop,
  CircularProgress,
  FormHelperText,
  Typography,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { flatData } from '../../mockData/flatData';
import { buildTree } from './helpers';
import { setTree } from '../../store/treeSlice';
import { delay } from '../../mockData/delay';

export const StartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [code, setCode] = useState(JSON.stringify(flatData));
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleClickClean = () => {
    setCode('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tree = buildTree(JSON.parse(code));
    dispatch(setTree(tree));
    setIsLoading(true);
    await delay(800);
    setIsLoading(false);
    history.push('/dendrogram');
  };

  return (
    <Box m={5}>
      <Typography variant="h5" textAlign="center">
        Enter json (or use predefined json)
      </Typography>
      <Box m={5}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter json"
            minRows={10}
            maxRows={25}
            multiline
            variant="outlined"
            value={code}
            onChange={handleCodeChange}
            fullWidth
            required
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={3}
          >
            <FormHelperText>
              <ul>
                <li>
                  Must start and end with square brackets <code>[...]</code>
                </li>
                <li>
                  Every object must have a closing and opening curly braces{' '}
                  <code>{`{...}`}</code>
                </li>
                <li>
                  Each object is separated by a comma <code>{`{},{},`}</code>
                </li>
                <li>
                  Each object must contain: <code>id, parentId, name</code>
                </li>
              </ul>
            </FormHelperText>
            <Box display="flex" columnGap={2}>
              <Button
                color="primary"
                disabled={code.trim() === ''}
                type="submit"
                variant="contained"
                size="large"
              >
                Confirm
              </Button>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                onClick={handleClickClean}
              >
                Clean
              </Button>
            </Box>
          </Box>
        </form>
        <Backdrop open={isLoading} sx={{ color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};
