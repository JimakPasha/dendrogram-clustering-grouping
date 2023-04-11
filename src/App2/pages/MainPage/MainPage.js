import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { setNewVersion } from './../../store/eventLogSlice';
import { Dendrogram } from '../../view/Dendrogram/Dendrogram';
import { EventLog } from '../../view/EventLog';
import { Comments } from '../../view/Comments';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { tree } = useSelector((state) => state.tree);

  const [tabValue, setTabValue] = useState('Dendrogram');

  useEffect(() => {
    dispatch(setNewVersion(tree));
  }, [tree]);

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
    </>
  );
};
