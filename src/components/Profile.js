import React from "react";
import logo1 from'../edge.png';
import { Grid, Card, Button} from "@mui/material"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Box, MenuItem, MenuList, ListItemIcon, Typography,CardMedia, Avatar } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StrollerIcon from '@mui/icons-material/Stroller';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { Link } from "@mui/icons-material";
import { display } from "@mui/system";
import './Styles.css'
import ProfileTabs from "./ProfileTabs";
import ProfileStore from "./ProfileStore";

function Profile(){
    return(<>
    <ProfileStore >
    
    <Grid container spacing={2}>
  <Grid item xs={6}>
    <img src={logo1}></img>
  </Grid>
  <Grid item xs={6}>
    <p>How are you</p>
  </Grid>
  </Grid>

  <Box   sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} margin={2}>
        <Grid  xs={12} md={8} lg={8} marginRight={2 } >
            
            <Card container sx={{alignItems:'center',display:'flex'}} >
                <Grid xs={12} md={3} lg={3} marginRight={4} marginLeft={2}>
               <span className="" >
                <Avatar src={logo1}  sx={{ width: 100, height: 100 }}></Avatar>
                </span>
                
                </Grid>
                <Grid  xs={12} md={12} lg={12}>
                  <span sx={{display:'flex',alignItems:'center',margin:'1rem'}} marginTop="2rcm">
                  <Typography>Poorva Oberoi</Typography>
                
                        <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='2px'> 
                          <WorkOutlineIcon fontSize="small" padding='2px' sx={{marginRight:'1rem'}}></WorkOutlineIcon>
                         <span  margin='1rem'> Developer III - Software Engineering</span>
                          </Typography>
                       
                    <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='10px ' >
                    <LocationOnIcon fontSize="small" sx={{marginRight:'1rem'}}></LocationOnIcon>
                       <span sx={{marginLeft:'1rem'}} marginLeft="2px">Bangalore, Karnataka</span> 
                    </Typography>
                    <Typography variant="inherit" alignContent='center' sx={{display:'flex', alignItems:'center'}} marginTop='10px' fontSize='10px'>
                       <StrollerIcon fontSize="small" sx={{marginRight:'1rem'}}></StrollerIcon> 
                       <span sx={{marginLeft:'1rem'}}>B1</span>
                    </Typography>
                    </span>
                    </Grid>
                    
                    <Grid marginLeft={5} xs={12} md={12} lg={12} margin={2} >
                      <span   sx={{display:'flex',alignItems:'center',margin:'1rem'}}>
                     
                      <span className="login"> <LinkedInIcon fontSize="small"/></span> 
                        <span className="login"><TwitterIcon /></span> 
                        <span className="login"><GitHubIcon/></span> 
                        <span  className="login"><StackedLineChartIcon/></span>
                       
                        </span>
                        <div>
                        <Button  variant="contained"sx={{marginBottom:2,marginTop:5}}  direction="right">Download Resume</Button>
                        <Button variant="contained" sx={{ marginLeft:2,marginRight:2 , marginBottom:2,marginTop:5}} direction="right">Your Resume</Button>
                        </div>
                    </Grid>   
             </Card>
            </Grid>
            <Grid>
                <Card>
                    <p>Profile Strenth: Exllent</p>
                    <p>Enhance your professional credibility by adding your certifications</p>
                    <Link>Update Certifications</Link>
                </Card>
            </Grid>

    </Grid>
  </Box>
  <ProfileTabs/>
  </ProfileStore>
    </>
    
        
    )
}
export default Profile