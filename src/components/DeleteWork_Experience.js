import { Typography,TableRow,Modal,Button,Box,Grid} from "@mui/material";
import './Delete.css'
import React from "react";
function DeleteWork_Experience(props){
    const handleClose=()=>{
        console.log('close the button')
        props.handleClose()
      
    }
    return(
        <>
        <Modal open={props.open}
        onClose={() => console.log('close the function')}
         style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div className="modalClass"> 
       
            <TableRow sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}} >
                 <div style={{ display:'flex',justifyContent:'end'}}>
                    <Button onClick={()=>handleClose()} >X</Button></div>
                                
            </TableRow>
            <Grid container spacing={2} margin='10px'>
                <Grid>
                    <Typography>Are you sure you want to delete this Work Experience?</Typography>
                    <Typography >{props.name}</Typography>
                </Grid>

            </Grid>



           
            
            </div>
        </Modal></>
    )
}
export default DeleteWork_Experience