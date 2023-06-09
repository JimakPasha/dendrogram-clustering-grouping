import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  selectTreeEventLog,
  isMatchesCurrentAndSelectedVersion,
} from '../../../../store/eventLogSlice';
import { formatDate } from '../../helpers/formatDate';

export const Description = () => {
  const { versionNumber, date } = useSelector(selectTreeEventLog);
  const isCurrentVersion = useSelector(isMatchesCurrentAndSelectedVersion);

  return (
    <Typography variant="h5" textAlign="center">
      {isCurrentVersion ? (
        'Current actual version'
      ) : (
        <>
          Version: {versionNumber}
          <Typography>{formatDate(date)}</Typography>
        </>
      )}
    </Typography>
  );
};
