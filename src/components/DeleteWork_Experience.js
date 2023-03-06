import { Typography,TableRow,Modal,Button,Box,Grid} from "@mui/material";
import './Delete.css'
import React from "react";
import { ProfileContext } from "./ProfileStore";
function DeleteWork_Experience(props){
    const handleClose=()=>{
        console.log('close the button')
        props.handleClose()
      
    }
    return(

        <>
        <ProfileContext.Consumer>
            {value=>(
        <Modal open={props.open}
        onClose={() => console.log('close the function')}
         style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div className="modalClass"> 
       
            
                 <div style={{ display:'flex',justifyContent:'end'}}>
                    <Button onClick={()=>handleClose()} >X</Button></div>
                                
            
            <Grid container spacing={2} margin='10px'>
                <Grid>
                    <div>
                    <Typography>Are you sure you want to delete this Work Experience?</Typography>
                    <Typography >{props.name}</Typography>
                    </div>
                
                <div style={{display:'flex', justifyContent:'end'}} onClick={()=>value.handleDeleteWorkExperience(props.id)}><Button>Confirm</Button></div>
                </Grid>

            </Grid>
            



           
            
            </div>
        </Modal>
        )}
        </ProfileContext.Consumer>
        </>
    )
}
export default DeleteWork_Experience