import { Modal, Typography,Box, Grid,Button, Divider, TableHead, TableRow, TableCell,Table, Card, TextField } from "@mui/material";
import React from "react";
import './Delete.css'
function EditEducation(props){
    const handleEditClose = ()=>{
        console.log('edit the content ')
        props.handleEditClose()
    }

    return(
        <>
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
            <TextField sx={{fontSize:'10px'}} size='small' value={props.item.institute}>{props.item.institute}</TextField></div>
    </Grid>
        <Grid sx={{marginLeft:'10px'}}>  
            <div> <Typography fontSize='10px' >Degree / Course*</Typography>
                <TextField fontSize='10px'  size="small" margin="20px" value={props.item.course}>{props.item.course}</TextField></div>

        </Grid>
</Grid>
                           

<Grid container spacing={2} margin='10px' >
        <Grid  sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}}>
            <div><Typography fontSize='10px'>Location</Typography>
                               
                <TextField sx={{fontSize:'10px'}} size='small' value={props.item.city}>{props.item.city}</TextField>
            </div>
        </Grid>
            <Grid sx={{marginLeft:'10px'}}>
                               <div> <Typography fontSize='10px'>Grade / Score</Typography>
                               <TextField fontSize='10px'  size="small" margin="20px" value={props.item.score}>{props.item.score}</TextField>
                               </div>
                                
            </Grid>
 </Grid>
                                
<Grid container spacing={2} margin='10px' >
    <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}}>
        <div>
        <Typography fontSize='10px'>Term Start Date*</Typography>
        <TextField sx={{fontSize:'10px'}} size='small' value={props.item.start_date}>{props.item.start_date}</TextField>
        </div>
    
    </Grid>
        <Grid sx={{marginLeft:'10px'}}>
            <div>
            <Typography fontSize='10px' >Term End Date*</Typography>
           < TextField fontSize='10px'  size="small" margin="20px" value={props.item.end_date}>{props.item.end_date}</TextField>
            </div>
                                    

        </Grid> 

</Grid>
<Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
  <Button variant="contained" color="primary" sx={{ height: 40 }}>
    Update
  </Button>
</Box>
                                
 </div>
        </Modal>

        </>
    )
}
export default EditEducation