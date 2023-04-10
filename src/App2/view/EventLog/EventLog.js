import { Box } from '@mui/material';
import { SelectVersion, Rollback, DendrogramEventLog } from './components';

export const EventLog = () => {
  return (
    <>
      <Box display="flex" alignItems="flex-start" columnGap={3}>
        <SelectVersion />
        <Rollback />
      </Box>
      <DendrogramEventLog />
    </>
  );
};
