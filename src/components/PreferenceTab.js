import React, { useEffect, useState } from "react";
import {Box, Grid,Card, Typography} from '@mui/material'
import { ProfileContext } from './ProfileStore';
import Api from './api'

function PreferenceTab(){
    const [preferences,updatePreferences]=useState([])


     let skills = ['java','python','core java'] 
    
    
    return<>
    <ProfileContext.Consumer>
        {value =>(<>
    <p>The preferences you provide will be used to recommend the best careers & jobs for you.</p>
    
    <Box    sx={{border:'darkgray' }}><Grid container spacing={2}>
        
    {value.preferences.map((preference)=>(
        
   
    <Grid sx={{flexDirection:'row'}} xs={3} md={3} lg={3}>
        
        <Card>
            <Grid sx={{display:'flex',flexDirection:'row'}}>
                <Typography>{preference.skills}</Typography>
            </Grid>

        </Card>

    </Grid> ))}
  </Grid></Box>

    
  </>)}  
  </ProfileContext.Consumer>   
    
    </>
} 
export default PreferenceTab
