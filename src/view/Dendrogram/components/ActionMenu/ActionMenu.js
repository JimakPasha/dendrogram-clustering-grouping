import { optionsMenu } from './optionsMenu';
import { MenuItem, Menu } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanAnchorMenuEl,
  cleanNodeInfo,
  setSelectedMenuItem,
} from '../../../../store/modalMenuSlice';

export const ActionMenu = () => {
  const dispatch = useDispatch();
  const { anchorMenuEl } = useSelector((state) => state.modalMenu.nodeInfo);

  const handleClick = (e) => {
    dispatch(setSelectedMenuItem(e.currentTarget.dataset.id));
    dispatch(cleanAnchorMenuEl());
  };

  const handleClose = () => {
    dispatch(cleanNodeInfo());
  };

  return (
    <Menu open={anchorMenuEl} onClose={handleClose} anchorEl={anchorMenuEl}>
      {optionsMenu.map(({ id, title }) => (
        <MenuItem key={id} data-id={id} onClick={handleClick}>
          {title}
        </MenuItem>
      ))}
    </Menu>
  );
};
