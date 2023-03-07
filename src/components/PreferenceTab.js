import React, { useEffect, useState } from "react";
import {Box, Grid,Card, Typography, CardContent} from '@mui/material'
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


    //  let skills = ['java','python','core java'] 
    
    
    return(<>
    <ProfileContext>
        {value=>(<>
        {console.log('preferences value',value.preferences[0].roles )}
    <Grid container spacing={1} >
        <Grid xs={4} md={4} lg={4}>
            
                        <Card style={{marginRight:'10px'}} >
               
                <div  >  <WorkOutlineIcon fontSize="small" padding='2px'
                 sx={{marginRight:'1rem',color:'lightblue',marginLeft:'1rem'}}></WorkOutlineIcon>
                        Roles </div>
                        <span style={{padding:'10px'}}>
                        {value.preferences[0].roles.map(item=>(<>
                       <span>{item.name}</span>
                     
                     
                        </>))}
                        </span>
                        

               

            </Card>
           

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <Card style={{marginRight:'10px',marginBottom:'10px'}}>
                <div style={{fontSize:'12px'}}>
                <WorkOutlineIcon fontSize="small" padding='2px'  sx={{marginRight:'1rem',color:'lightblue'}}></WorkOutlineIcon>
                    Titles </div>
                    <span style={{margin:'10px'}}>
                    {value.preferences[0].titles.map(item=>(<>
                    <Typography fontSize='10px'>{item}</Typography></>))}
                    </span>
                
                  
               

            </Card>

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            <Card>
            <div style={{fontSize:'12px'}}>
                  <LightbulbIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}></LightbulbIcon>
                    Skills </div>
                    <span style={{margin:'10px'}}>
                    
                    {value.preferences[0].skills.map(item=>(<>
                    <span>
                        {item}, </span>
                    </>))}
                    </span>
                    
              

            </Card>

        </Grid>

    </Grid>
    <Grid container spacing={1}>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginRight:'10px'}}>
            <div>
            
                <ArchitectureIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </ArchitectureIcon>
                    Functions </div>
                   <span style={{margin:'10px'}}>
                   {value.preferences[0].functions.map(item=>(<>
                    <span>{item.name}</span></>))}
                   </span>
                    
            

        </Card>
    </Grid>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginTop:'10px',marginRight:'10px'}}>
           <div>
                <GradeIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </GradeIcon>
                
                     Grades </div>
                    <span >
                    {value.preferences[0].grades.map(item=>(
                        <>
                        <span style={{margin:'10px'}}>
                            {item}</span></>
                    ))}

                    </span>
                   
            

        </Card>
    </Grid>
    <Grid xs={4} md={4} lg={4}>
        <Card style={{marginTop:'10px',marginRight:'10px'}}>
          
                <LocationOnIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </LocationOnIcon>
                    <span  style={{fontSize:'12px'}}> Locations </span>
                    <div style={{margin:'10px'}}>
                    {value.preferences[0].locations.map(item=>(<>
                    <div>
                        {item.name}</div></>))}

                    </div>
                    
         

        </Card>
    </Grid>
    
    </Grid>
    <Grid container spacing={1}>
        <Grid xs={4} md={4} lg={4}>
            <Card style={{marginTop:'10px',marginRight:'10px'}}>
            
                <PersonAddIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </PersonAddIcon>
                    <span  style={{fontSize:'12px'}}> Managers </span>
                    
                    {value.preferences[0].managers.map(item=>(<>
                    <div>
                        {item}</div></>))}
           

            </Card>

        </Grid>
        <Grid xs={4} md={4} lg={4}>
            
            <Card style={{marginTop:'10px'}}>
           
                <ApartmentIcon fontSize="small" padding='2px' sx={{marginRight:'1rem',color:'lightblue'}}>
                </ApartmentIcon>
                    <span  style={{fontSize:'12px'}}>Accounts  </span>
                    {value.preferences[0].accounts.map(item=>(<>
                    <div>
                        {item}</div></>))}
            
            </Card>

        </Grid>


    </Grid>
   
    </> )}
    </ProfileContext>
    
    </>)
} 
export default PreferenceTab
