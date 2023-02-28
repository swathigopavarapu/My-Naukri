import React from "react";
import {Box,Grid,Card, Typography} from "@mui/material"
import { ProfileContext } from "./ProfileStore";
import { Edit } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Visa(){
    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
        <Box fontSize='15px'>

        <p fontSize='10px'>Pathfinder has added your visa details from your resume and company records</p> 
            <Grid container spacing={2}>
                {value.visa.map(id=>(
            
            <Grid sx={{flexDirection: 'row'}} xs={3} md={3} lg={3} marginBottom='10px' marginLeft='10px'marginTop='10px' marginRight='10px' >
                 <Card marginLeft='10px'>

                    <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginLeft='10px'fontSize='10px' >
                    <span fontSize='12px'><Typography fontSize='10px'>Visa Type</Typography>
                        {id.visa_type}</span>
                        <span><Typography ><DeleteIcon fontSize='10px'></DeleteIcon>
            <EditIcon fontSize='10px'></EditIcon></Typography> </span>
                        
                                
                        
                        
                        
                     </Grid><hr></hr>
                     <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}}  marginLeft='10px' fontSize='10px'>
                        <Typography fontSize='10px'>Country</Typography>
                        <span fontSize="10px">{id.country}</span>

                     </Grid><hr></hr>
                     <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginLeft='10px' marginRight='10px'> 
                     <span>
                        <Typography fontSize='10px'>Valid From</Typography>
                        {id.valid_from  ? 
                        <Typography fontSize='10px'>{id.valid_from}</Typography>:<Typography fontSize='10px'>Edit to select</Typography>} </span>
                    <span>
                        
                        <Typography sx={{display:'flex', justifyContent:'row'}} fontSize='10px'>Valid Till</Typography>
                        {id.valid_till ?
                        <Typography fontSize='10px'>{id.valid_till}</Typography>:<Typography fontSize='10px'>Edit to select</Typography>}</span>
                        </Grid>
                     
                     
                </Card>
            </Grid>
            ))}

            </Grid>
           
        </Box>
         )}
        </ProfileContext.Consumer></>
    )
}
export default Visa