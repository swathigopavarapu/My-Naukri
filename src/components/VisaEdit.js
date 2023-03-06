import { Button, Modal,Typography,TextField,Grid,Box } from "@mui/material";
import React, { useState } from "react";
import { ProfileContext } from "./ProfileStore";
function VisaEdit(props){
    const [visa,updateVisa]=useState(props.id)
    const handleVisaEditClose=()=>{
        console.log('edit visa close')
        props.handleVisaEditClose()
    }
    const handleOnChangeVisa=(event)=>{
        console.log('handle on change visa', event.target.value)
        updateVisa({...visa,[event.target.name]:event.target.value})
    }
    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
        <Modal 
        open={props.edit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="modalClass">
               <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px',marginLeft:'10px'}}>
                    <div style={{fontSize:'15px'}}>Edit your Visa</div>
                    <Button onClick={handleVisaEditClose}>X</Button>
                    </div><hr></hr>
                    <Grid container spacing={2} margin='10px'>
                        
                        <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}} >
                            <div><Typography fontSize='12px'>Visa Type*</Typography>
                            <TextField style={{fontSize:'10px'}} size="small" name="visa_type" value={visa.visa_type}
                            onChange={handleOnChangeVisa} >{visa.visa_type}</TextField></div>

                        </Grid>
                        <Grid sx={{marginLeft:'10px'}}>
                            <div> 
                                <Typography fontSize='10px' >Country*</Typography>
                                <TextField fontSize='10px'  size="small" margin="20px" name="country"  value={visa.country}
                                onChange={handleOnChangeVisa} >{visa.country}</TextField>
                            </div>
                        
                         </Grid>
                    </Grid>
                    <Grid container spacing={2} margin='10px' >
                         <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}}>
                         <div>
                            <Typography fontSize='10px'>Valid From</Typography>
                            <TextField fontSize='10px' size="small" name="valid_from" value={visa.valid_from}
                            onChange={handleOnChangeVisa} >{visa.valid_from}</TextField>
                         </div>
                          </Grid>
                            <Grid sx={{marginLeft:'10px'}}>
                            <div>
                                <Typography fontSize='10px'>Valid Till</Typography>
                                <TextField fontSize='10px' size="small" name="valid_till" value={visa.valid_till}
                                onChange={handleOnChangeVisa}>{visa.valid_till}</TextField>
                            </div>
                                
                            </Grid>
                    </Grid>
                    
                    <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={()=>value.handleEditVisa(visa)} > Update</Button>
</Box>
</div>
               
               
            
            </Modal>
            )}
            </ProfileContext.Consumer>
            </>

    )
}
export default VisaEdit
