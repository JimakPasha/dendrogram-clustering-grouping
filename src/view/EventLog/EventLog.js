import { Box } from '@mui/material';
import {
  Description,
  SelectVersion,
  Rollback,
  DendrogramEventLog,
} from './components';

export const EventLog = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={5}>
      <Box display="flex" columnGap={3}>
        <SelectVersion />
        <Rollback />
      </Box>
      <Description />
      <DendrogramEventLog />
    </Box>
  );
};
