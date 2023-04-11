import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, IconButton } from '@mui/material';
import { Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { setNewVersion } from '../../store/eventLogSlice';
import { Dendrogram } from '../../view/Dendrogram/Dendrogram';
import { EventLog } from '../../view/EventLog';
import { Comments } from '../../view/Comments';

export const DendrogramPage = () => {
  const dispatch = useDispatch();
  const { tree } = useSelector((state) => state.tree);

  const [tabValue, setTabValue] = useState('Dendrogram');

  useEffect(() => {
    dispatch(setNewVersion(tree));
  }, [tree, dispatch]);

  const handleChangeTab = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab}>
            <Tab label="Dendrogram" value="Dendrogram" />
            <Tab label="EventLog" value="EventLog" />
            <Tab label="Comments" value="Comments" />
          </TabList>
        </Box>
        <TabPanel value="Dendrogram">
          <Dendrogram />
        </TabPanel>
        <TabPanel value="EventLog">
          <EventLog />
        </TabPanel>
        <TabPanel value="Comments">
          <Comments />
        </TabPanel>
      </TabContext>
      <Box position="absolute" top={5} right={5}>
        <IconButton component={Link} to="/">
          <Home />
        </IconButton>
      </Box>
    </>
  );
};
