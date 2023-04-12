import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from '@mui/material';
import { setSelctedVersion } from '../../../../store/eventLogSlice';
import { formatDate } from '../../helpers/formatDate';

export const SelectVersion = () => {
  const dispatch = useDispatch();
  const { versions, selectedVersionId } = useSelector(
    (state) => state.eventLog
  );
  const [version, setVersion] = useState(selectedVersionId);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    setVersion(selectedId);
    dispatch(setSelctedVersion(selectedId));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 330 }} size="small">
      <InputLabel id="version">version</InputLabel>
      <Select
        value={version}
        label="version"
        onChange={handleChange}
        labelId="version"
      >
        {versions.map(({ id, versionNumber, date }) => (
          <MenuItem key={id} value={id}>
            v{versionNumber}: {formatDate(date)}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select a version to view</FormHelperText>
    </FormControl>
  );
};
