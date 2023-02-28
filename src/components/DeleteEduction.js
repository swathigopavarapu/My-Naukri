import { Typography,Box, Button } from "@mui/material";
import React from "react";
import Modal from '@mui/material/Modal';
import './Delete.css'
function DeleteEducation(props){
//  
    
const handleClose = ()=>{
    console.log('handle close or not')
    props.handleCloseDelete()
}
    
    return(<>
    
    <Modal
        open={props.open}
        
        
        onClose={() => console.log('calling close function')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div   className="modalClass" >
         
      <Box sx={{display:'flex',alignItems:'center',padding:'20px'}} >
     <div style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end ',flexGrow:'inherit',float:'right'}}>
         <Button variant="" onClick={handleClose}>X</Button></div>
     
        <div> <Typography id="modal-modal-title" variant="body1" component="body">
          Are you sure you want to delete this Education?
          </Typography>
          <Typography>{props?.name}</Typography>
          </div> 

         <div> <Button variant="contained">Confirm</Button></div>
       
        </Box>
        </div>
      </Modal>
        </> )
}
export default DeleteEducation