import { Typography,Box,Grid,Card } from "@mui/material";
import React from "react";
import { ProfileContext } from "./ProfileStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Work_Experience(){
    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
                <Box>
                    <p>Pathfinder has added your work experience from your resume and company records</p>
                    <Grid container spacing={2}>
                        {value.work_experience.map(work=>(
                    <Grid sx={{flexDirection: 'row'}} xs={3} md={3} lg={3} marginBottom='10px'marginLeft='10px'marginTop='10px'marginRight='10px'>
                        <Card >
                            <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' marginBottom='10px'>
                                <Typography fontSize='10px'>{work.title}</Typography>
                                <span>
                                     <Typography ><DeleteIcon fontSize='10px'></DeleteIcon> <EditIcon fontSize='10px'></EditIcon></Typography>
                                         </span>
                                
                            </Grid><hr></hr>
                            <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' marginBottom='10px'>
                                <Typography fontSize='12px' >Duration</Typography>
                                <Typography fontSize='12px'>{work.start_date} - {work.end_date}</Typography>
                                
                            </Grid><hr></hr>
                            <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' marginBottom='10px'>
                                <Typography fontSize='12px'>Organisation</Typography>
                                <Typography fontSize='12px' >{work.company}</Typography>
                            </Grid><hr></hr>
                            <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' marginBottom='10px'>
                               <span><Typography fontSize='12px'>Employment Type</Typography>
                               <Typography fontSize='12px'>{work.employment_type}</Typography></span> 
                                
                                <span><Typography fontSize='12px'>Location</Typography>
                                <Typography fontSize='12px'>Edit to select</Typography></span>

                            </Grid><hr></hr>
                            <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginTop='10px'marginLeft='10px'marginRight='10px' marginBottom='10px'>
                                <Typography fontSize='12px'>Responsibilities</Typography>
                                <Typography fontSize='12px'>Edit to select</Typography>

                            </Grid>

                        </Card>
                    </Grid>
                    ))}

                    </Grid>
                </Box>
            )}
        </ProfileContext.Consumer>
        </>
    )
}
export default Work_Experience