import { Box, FormHelperText } from '@mui/material';
import {
  Description,
  SelectVersion,
  Rollback,
  DendrogramEventLog,
} from './components';

export const EventLog = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={5}>
      <FormHelperText>
        You can <u>see past versions</u> of the tree and <u>roll them back</u>{' '}
        if necessary
      </FormHelperText>
      <Box display="flex" columnGap={3}>
        <SelectVersion />
        <Rollback />
      </Box>
      <Description />
      <DendrogramEventLog />
    </Box>
  );
};
