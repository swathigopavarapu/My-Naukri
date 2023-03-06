import { Modal, Typography,Button,Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import './Delete.css';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ProfileContext } from "./ProfileStore";
function Editwork_Experience(props){

    const [experience,updateExperience]=useState(props.work)

// console.log('work s comining',props.work)
const handleEditClose=()=>{
    // console.log('edit button will be close')
    props.handleEditClose()
}

const handleOnChange=(event)=>{
    // console.log('work experince will be update')
    updateExperience({...experience,[event.target.name]: event.target.value})
    console.log('change the event',event.target.value)

}

    return(
        <>
        <ProfileContext.Consumer>
            {values=>(
        <Modal
        open={props.edit}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <div className="modalClass">
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px',marginLeft:'10px'}}>
                    <div style={{fontSize:'15px'}}>Edit Work Experience</div>
                    <Button onClick={handleEditClose}>X</Button>
                    </div><hr></hr>
                    <Grid container spacing={2} margin='10px'>
                        
                        <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}} >
                            <div><Typography fontSize='12px'> Position*</Typography>
                            <TextField style={{fontSize:'10px'}} size="small" name="title" value={experience.title}
                             onChange={handleOnChange}>
                                {experience.title}</TextField></div>

                        </Grid>
                        <Grid sx={{marginLeft:'10px'}}>
                            <div> 
                                <Typography fontSize='10px' >Type of Employment*</Typography>
                                <TextField fontSize='10px'  size="small" margin="20px" name="employment_type" value={experience.employment_type}
                                onChange={handleOnChange}>
                                    {experience.employment_type}
                                </TextField>
                            </div>
                        
                         </Grid>
                    </Grid>
                    <Grid container spacing={2} margin='10px' >
                         <Grid >
                            <div>
                                <Typography fontSize='10px'>Company*</Typography>
                                <TextField fontSize='10px' size='small' name="company" value={experience.company}
                                onChange={handleOnChange}>{experience.company}</TextField>
                            </div>

                            </Grid>
                            <Grid sx={{marginLeft:'10px'}}>
                                <div>

                                    <Typography fontSize='10px'>Location</Typography>
                                    <TextField fontSize='10px' size="small" name="city" value={experience.city}
                                    onChange={handleOnChange}>{experience.city}</TextField>
                                </div>
                            </Grid>
                    </Grid>
                    <Grid container spacing={2} margin='10px'>
                        <Grid>
                            <div>
                                <Typography fontSize='10px'>Employment Start Date*</Typography>
                                <TextField fontSize='10px' size="small" name="start_date" value={experience.start_date}
                                onChange={handleOnChange}>{experience.start_date}</TextField>
                            </div>
                        </Grid>
                        <Grid sx={{marginLeft:'10px'}}>
                            <div>
                                <Typography fontSize='10px'>Employment End Date*</Typography>
                                <TextField fontSize='10px' size="small" name="end_date" value={experience.end_date}
                                onChange={handleOnChange}>{experience.end_date}</TextField>
                            </div>
                        </Grid>
                    </Grid>
                    <span >
                        <Typography fontSize='10px' marginLeft='10px'>Your Responsibilites</Typography>
                        <TextareaAutosize
                       aria-label="empty textarea"placeholder="Add a Description of your responsibilities"style={{ width: 450,marginLeft:'10px'}}
                       onChange={handleOnChange} name="responsibilities" value={experience.responsibilities}>{experience.responsibilities}</TextareaAutosize>
                        
                    </span>
                    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" color="primary" sx={{ height: 40 }} 
           onClick={()=>
            {console.log('on button click',values)
               values.handleEditWorkExperience(experience)
                }}>
    Update
  </Button>
</Box>
                    
        

               </div>
               
        
        </Modal>
        )}
        </ProfileContext.Consumer>
        </>
    )
} export default Editwork_Experience