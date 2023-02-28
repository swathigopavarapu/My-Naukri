import React from "react";
import { Box,Tab,Table,Grid,Card, Typography, TableRow, TableHead, TableCell} from '@mui/material'
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import './Styles.css'
import SpecialisationTab from "./SpecialistionsTab";
import PreferenceTab from "./PreferenceTab";
import ProjectsTab from "./ProjectsTab";
import Visa from './Visa';
import Work_Experience from './Work_Experience';
import Education from "./Education";
function ProfileTabs(){
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return(
        <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Skills & Title" value="1" />
            <Tab label="Specialisation" value="2" />
            <Tab label="Preference" value="3" />
            <Tab label="Certifications" value="4" />
            <Tab label="Projects" value="5" />
            <Tab label="Visa" value="6" />
            <Tab label="Work Experience" value="7" />
            <Tab label="Education" value="8" />
          </TabList>
        </Box>
        <TabPanel value="1">Applicable Title & Domains</TabPanel>
        <TabPanel value="2">
           <SpecialisationTab />
            
        </TabPanel>

        <TabPanel value="3" ><PreferenceTab/></TabPanel>
        <TabPanel value="4">Looks like you have no certifications added. Let's fix that! Tap the button below to add a new certificate.</TabPanel>
        <TabPanel value="5"><ProjectsTab/></TabPanel>
        <TabPanel value="6"><Visa/></TabPanel>
        <TabPanel value="7"><Work_Experience/></TabPanel>
        <TabPanel value="8"> <Education/></TabPanel>
        

      </TabContext>
    </Box>
    
        
        
        
        
       </>
    )
}
export default ProfileTabs