import React, { useState } from "react";
import ProfileStore, { ProfileContext } from "./ProfileStore";
import { Grid, Box, Card, Typography,Modal, Button} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteEducation from "./DeleteEduction";
import EditEducation from './EditEducation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Education(){
    const[open,updateOpen]=useState(false)
    const[edit,updateEdit] =useState(false)//it is insially false then will be true
    const [name,updateName]=useState('')
    const[institute,updateInstitute]=useState('')//it is initially empty
     const [item,updateItem]=useState('');
     const [id,setId] = useState('')
 
     
    const handleOpen=(title,id)=>{
        updateName(title)
        // console.log('delete the function',title)
        updateOpen(true)
        setId(id)

    }
    const handleEdit=(item)=>{
        console.log('items are disply',item)
        updateItem(item)
        updateEdit(true)


    }
const handleCloseDelete = () =>{
    
    updateOpen(false)
}
const handleEditClose =()=>{
    updateEdit(false)
}
const handleDeleteEducation=()=>{

}

    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
                <Box>
                    <p fontSize='10px'>Pathfinder has added your education experience from your resume and company records</p>
                    
                    <Grid container spacing={2} margin='10px' >
                        <Grid  xs={3} md={3} lg={3} marginTop='10px'>
                            <Card  sx={{ p: 2, border: '1px dashed grey' }}  onClick={()=>handleEdit(null)}>
                            <Box component="span"> 
                                <Button>
                                    <AddCircleOutlineIcon style={{marginRight:'5px'}}>
                                         </AddCircleOutlineIcon> Add Education</Button> 
                                    </Box>
                            </Card>

                        </Grid>
                        {value.education.map(item =>(<>
                            <Grid sx={{flexDirection: 'row'}} xs={3} md={3} lg={3} marginBottom='10px' marginLeft='10px'marginTop='10px' marginRight='10px' fontSize='10px'>
                               
                                
                                 <Card marginLeft='10px' fontSize='12px'>
                                    <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between'}} marginLeft='10px' fontSize='10px'>
                                        
                                   
                                    <Typography fontSize='10px' color='blue'>{item.institute}</Typography>
                                 
                                        <span>
                                        
      

                                        <Typography ><DeleteIcon fontSize='10px' onClick={() => handleOpen(item.institute, item.id)}></DeleteIcon>
            <EditIcon fontSize='10px' onClick={() => handleEdit(item)}></EditIcon></Typography>
                                        
                                        </span>
                                        
                                    </Grid><hr></hr>
                                    <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginLeft='10px' fontSize='5px'>
                                        <Typography fontSize='12px'>Degree / Course</Typography>
                                        <Typography fontSize='12px'>{item.course}</Typography>
                                    </Grid><hr></hr>
                                    <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginLeft='10px'>
                                        <span>
                                        <Typography fontSize='12px'>Grade/Score</Typography>
                                        {item.score ?
                                        <Typography fontSize='12px' >{item.score}</Typography>:<Typography fontSize='12px'>Edit to select</Typography>}
                                        </span>

                                    </Grid><hr></hr>
                                    <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginLeft='10px'>
                                        <Typography fontSize='12px'>Term</Typography>
                                        <Typography fontSize='12px'>{item.start_date ? item.start_date : 'edit to select'} to {item.end_date ? item.end_date : 'edit to select'}</Typography>
                                    </Grid><hr></hr>
                                    <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between'}} marginLeft='10px'>
                                        <span><Typography fontSize='12px'>Location</Typography>
                                        {item.city ?
                                        <Typography fontSize='12px'>{item.city }</Typography>:<Typography fontSize='12px'>Edit to select</Typography>}</span>

                                    </Grid>


                                    

                                </Card>

                            </Grid>
                            </>))}
                          
                    </Grid>
                    {open ? <DeleteEducation handleCloseDelete={handleCloseDelete} id={id} open={open} name={name}  />: null}
                    {edit ? <EditEducation  handleEditClose={handleEditClose} edit={edit} item={item} />: null}
                   
                </Box>
            )}
            
            
       

        </ProfileContext.Consumer>
        </>
    )
}
export default Education