import React, { useEffect, useState } from "react";
import {Box, Grid,Card, Typography} from '@mui/material'
import { ProfileContext } from './ProfileStore';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Api from './api'

function PreferenceTab(){
    const [preferences,updatePreferences]=useState([])


     let skills = ['java','python','core java'] 
    
    
    return(<>
    <Grid container spacing={1} >
        <Grid xs={4} md={4} lg={4}>
            <Card>
                <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                    <WorkOutlineIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}></WorkOutlineIcon>
                        <span  style={{fontSize:'12px'}}> Roles </span>
                </Typography>

            </Card>

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <Card>
               <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                  <WorkOutlineIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}></WorkOutlineIcon>
                    <span  style={{fontSize:'12px'}}> Titles </span>
                </Typography>

            </Card>

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <Card>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                  <LightbulbIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}></LightbulbIcon>
                    <span  style={{fontSize:'12px'}}> Skills </span>
                </Typography>

            </Card>

        </Grid>

    </Grid>
    <Grid container spacing={1}>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginTop:'10px'}}>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                <ArchitectureIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </ArchitectureIcon>
                    <span  style={{fontSize:'12px'}}> Functions </span>
            </Typography>

        </Card>
    </Grid>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginTop:'10px'}}>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                <GradeIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </GradeIcon>
                    <span  style={{fontSize:'12px'}}> Grades </span>
            </Typography>

        </Card>
    </Grid>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginTop:'10px'}}>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                <LocationOnIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </LocationOnIcon>
                    <span  style={{fontSize:'12px'}}> Locations </span>
            </Typography>

        </Card>
    </Grid>
    
    </Grid>
    <Grid container spacing={1}>
        <Grid xs={4} md={4} lg={4}>
            <Card style={{marginTop:'10px'}}>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                <PersonAddIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </PersonAddIcon>
                    <span  style={{fontSize:'12px'}}> Managers </span>
            </Typography>

            </Card>

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <Card style={{marginTop:'10px'}}>
            <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                <ApartmentIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </ApartmentIcon>
                    <span  style={{fontSize:'12px'}}> Accounts </span>
            </Typography>

            </Card>

        </Grid>


    </Grid>
   
    
  
    
    </>)
} 
export default PreferenceTab
