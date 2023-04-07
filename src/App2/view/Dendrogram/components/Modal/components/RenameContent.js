import { useState } from 'react';
import { Typography, Box, Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';

export const RenameContent = ({handleCloseModal}) => {
    const {nodeName} = useSelector(state => state.modalMenu.nodeInfo)
    const [inputValue, setInputValue] = useState(nodeName);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
        handleCloseModal();
    };

    const handleCancel = () => {
        handleCloseModal();
    } 

    return (
        <>
            <Typography variant="h6" align="center" gutterBottom>Rename {nodeName} node</Typography>
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
                    <Button variant="contained" type="submit" disabled={inputValue.trim() === ''}>Confirm</Button>
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                </Box>
            </form>
        </>
    )
}