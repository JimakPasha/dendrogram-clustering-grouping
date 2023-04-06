import { useState } from 'react';
import { optionsMenu } from './optionsMenu';
import { MenuItem, Menu } from '@mui/material/';

export const ActionMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setSelectedMenuItem(e.currentTarget.dataset.id);
    handleClose();
  };

  const handleClose = () => {
    setIsOpenMenu(false);
    setAnchorEl(null);
  };

  return (
    <Menu open={isOpenMenu} onClose={handleClose} anchorEl={anchorEl}>
      {optionsMenu.map(({ id, title }) => (
        <MenuItem key={id} data-id={id} onClick={handleClick}>
          {title}
        </MenuItem>
      ))}
    </Menu>
  );
};
