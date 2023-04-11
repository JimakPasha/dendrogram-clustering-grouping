import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h2" marginBottom={4}>
        Page not found
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go back to home
      </Button>
    </Box>
  );
};
