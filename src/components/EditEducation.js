import { Modal, Typography,Box, Grid,Button, Divider, TableHead, TableRow, TableCell,Table, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import './Delete.css'
import { ProfileContext } from "./ProfileStore";
function EditEducation(props){
const [education,setEducation] = useState(props.item)

    const handleEditClose = ()=>{
        console.log('edit the content ')
        props.handleEditClose()
    }
    const handleOnChange = (event) =>{
        setEducation({...education,[event.target.name]:event.target.value})
        // setEducation({...education,course:event.target.value})

        console.log('change the event',event.target.value)
    }

    return(
        
        <>
        <ProfileContext.Consumer>
            {value=>(
        <Modal
        open={props.edit}
        onClose={()=>props.handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div   className="modalClass" >
            
                
                    
                 <TableRow sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}} >
                                <Typography sx={{display:'-ms-grid'}} fontSize='15px'paddingLeft='10px' >Edit Education</Typography>
                                <Button onClick={handleEditClose} >X</Button>
                                
                            </TableRow><hr></hr>
<Grid container spacing={2} margin='10px'>

    <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}} >

        <div><Typography fontSize='10px'   > Institute Name*</Typography>
            <TextField sx={{fontSize:'10px'}} size='small' name="institute" value={education.institute}
             onChange={handleOnChange}>{education.institute}</TextField></div>
    </Grid>
        <Grid sx={{marginLeft:'10px'}}>  
            <div> <Typography fontSize='10px' >Degree / Course*</Typography>
                <TextField fontSize='10px'  size="small" margin="20px" name='course' value={education.course}
                onChange={handleOnChange}>{education.course}</TextField></div>

        </Grid>
</Grid>
                           

<Grid container spacing={2} margin='10px' >
        <Grid  sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}}>
            <div><Typography fontSize='10px'>Location</Typography>
                               
                <TextField sx={{fontSize:'10px'}} size='small'name="city" value={education.city}
                onChange={handleOnChange}>{education.city}</TextField>
            </div>
        </Grid>
            <Grid sx={{marginLeft:'10px'}}>
                               <div> <Typography fontSize='10px'>Grade / Score</Typography>
                               <TextField fontSize='10px'  size="small" margin="20px" name="score" value={education.score}
                               onChange={handleOnChange}>{education.score}</TextField>
                               </div>
                                
            </Grid>
 </Grid>
                                
<Grid container spacing={2} margin='10px' >
    <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}}>
        <div>
        <Typography fontSize='10px'>Term Start Date*</Typography>
        <TextField sx={{fontSize:'10px'}} size='small' name="start_date" value={education.start_date}
        onChange={handleOnChange}>{education.start_date}</TextField>
        </div>
    
    </Grid>
        <Grid sx={{marginLeft:'10px'}}>
            <div>
            <Typography fontSize='10px' >Term End Date*</Typography>
           < TextField fontSize='10px'  size="small" margin="20px" name="end_date" value={education.end_date}>{education.end_date}</TextField>
            </div>
                                    

        </Grid> 

</Grid>
<Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
  <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={()=>value.handleEditEducation(education)}>
    Update
  </Button>
</Box>
                                
 </div>
        </Modal>
        )}
       
        </ProfileContext.Consumer>
        </>
        
    )
}
export default EditEducation