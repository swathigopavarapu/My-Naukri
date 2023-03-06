import { Modal,Button,Box,Grid,Typography } from "@mui/material";
import React from "react";
import { ProfileContext } from "./ProfileStore";

function VisaDelete(props){

    const handleOnClose=()=>{
        console.log('visa button will be close')
        props.handleCloseVisa()
    }
    // console.log('the props',props.open)
    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
        <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
         <div   className="modalClass" >
         
         <div style={{ display:'flex',justifyContent:'end'}}>
                    <Button onClick={handleOnClose} >X</Button></div>
                    

            <Grid container spacing={2} margin='10px'>
                <Grid>
                    <div>
                    <Typography fontSize='15px'>Are you sure you want to delete this Visa Details?</Typography>
            
                    </div>
                    <div style={{display: 'flex',justifyContent:'center'}}>
                    <Typography >{props.name}</Typography>
                    </div>
                
                    
                    
                
                <div style={{display:'flex', justifyContent:'end'}} ><Button onClick={()=>value.handleDeleteVisa(props.id)}>Confirm</Button></div>
                </Grid>

            </Grid>
            
        </div>
        </Modal>
        )}
        </ProfileContext.Consumer>
        </>
    )
}
export default VisaDelete