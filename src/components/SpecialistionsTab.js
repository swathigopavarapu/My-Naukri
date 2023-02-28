import React from 'react';
import { Box,Tab,Table,Grid,Card, Typography, TableRow, TableHead, TableCell} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SouthIcon from '@mui/icons-material/South';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { ProfileContext } from './ProfileStore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const SpecialisationTab=() =>{

    let skills =['java','python','core java']
   
    return <>
    <ProfileContext.Consumer>
        {value => (
     <Box>
         
     
                <Grid container spacing={2}>
                    {value.specialisations.map(item =>(<>
                        
 
                <Grid sx={{flexDirection: 'row'}} xs={3} md={3} lg={3} marginTop='10px' marginLeft='10px'marginRight='10px'>
                  
                   <Card > 
                   <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' >
                        <Typography fontSize='10px' >{item.specialization_name}</Typography>
                        <Typography fontSize='10px'>You Have {item.specialization_skills.length} Skills</Typography>
                        </Grid><hr></hr>
                    
                      
                        <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' >
                            <Typography fontSize='10px'>Mandatory Skills</Typography>
                             <Typography sx={{direction:'flex', flexDirection:'row',textDecoration: 'underline'}} fontSize='12px' >Hide more Skills</Typography>
                        </Grid><hr></hr>
                      
                      
                            {item.specialization_skills.map((skill)=>(<>
                                <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}}
                                 marginTop='10px'marginLeft='10px'marginRight='10px'>
                         
                                <Typography fontSize='12px'>
                                    <CheckCircleIcon fontSize="small" sx={{marginRight:'1rem'}} ></CheckCircleIcon>
<span>{skill.skill_name}</span>
                                </Typography>
                                 <Typography fontSize="small"><SouthIcon/> 
                                  </Typography>                        
                                </Grid>
                                    <hr></hr>
                                    </>
                            ))}
{/* {item.feedback.map((responce) =>( */}
                            <Grid sx={{display: 'flex',flexDirection: 'row'}} marginTop='10px'marginLeft='10px' marginRight='10px'>
                            {console.log('the speci',item.feedback.action_performed,item.feedback.liked)}
                          
                          {item.feedback.action_performed && item.feedback.liked ? <> <ThumbUpIcon fontSize='10px'></ThumbUpIcon>
                          <ThumbDownOffAltIcon fontSize="small" sx={{marginLeft:'1rem'}}>  </ThumbDownOffAltIcon></> : null}
                          {item.feedback.action_performed && !item.feedback.liked ? <ThumbDownAltIcon fontSize='10px'></ThumbDownAltIcon> : null }
                          {!item.feedback.action_performed ? <> < ThumbUpOffAltIcon>
                                </ThumbUpOffAltIcon> 
                            <ThumbDownOffAltIcon fontSize="small" sx={{marginLeft:'1rem'}}>  </ThumbDownOffAltIcon> </> : null}
                           
                          
                           
                            
                            </Grid>
                            {/* // ))} */}
                                   
                   </Card>
                   </Grid></>))}
                    </Grid>

                
            </Box>)}
            </ProfileContext.Consumer>
            </>
}
export default SpecialisationTab