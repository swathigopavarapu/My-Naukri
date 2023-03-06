import React, { useEffect, useState } from "react";
import {Grid,Card, Typography, Button ,Stack,Chip,FormControl,OutlinedInput,InputAdornment,TextField,Autocomplete} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { ProfileContext } from "./ProfileStore";
import AddSkill from "./AddSkill";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function SkillTab(){
    const [titleFlag,setTitleFlag] = useState(false)
    const [dominsFlag,setDominsFlag] = useState(false)
    const [item,updateItem]=useState('')
  
    const [open,updateOpen]=useState(false)

   



    const handleOpen = (item) => {
        updateOpen(true)
        console.log('testcases are updated or not',item)
        updateItem(item)
      }

      const handleOnClose =()=>{
        updateOpen(false)
      }


      const cancelExpand = (e) =>{
      e.stopPropagation()
      e.preventDefault()
        setTitleFlag(false)
        setDominsFlag(false)
        console.log('inside the ',titleFlag)
      }

      const handleApplicableTitles=()=>{
        console.log('handleApplicableTitles')

      }
     
  
    // useEffect(()=>{
      
    // },[titleFlag])

    return(
        <>
        <ProfileContext.Consumer>
            {value=>(<>
           
      
        <div style={{display:'flex',fontSize:'13px', marginLeft:'10px'}} > 
        
        Applicable Title & Domains
        </div>
        {/* {console.log('the title flag',titleFlag)} */}
        <Grid container spacing={2} marginTop="10px" marginLeft='10px' marginRight='10px' paddingBottom='10px' paddingTop='10px'>
            <Grid xs={6} md={6} lg={6}>
                <Card color='inherit' style={{fontSize:'13px', padding:'10px'}} 
               
                onClick={()=>setTitleFlag(true)}>How would you describe the job you do right now to your friends?
                {titleFlag ? <>

                    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={value.results || []}
      disableCloseOnSelect
    //   onSelect ={(event)=>value.handleApplicableTitles(event.target.value)}
    // getOptionLabel  ={(option) => value.handleApplicableTitles(option)}
      sx={{ width: 300,fontSize:'10px' }} 
      renderInput={(params) =>
         <TextField {...params} label="search for title"
          onChange={value.handleProps}
        //  onSelect={}
          />}
    />
                    
                               
                
                           
                           {value.applicabletitles?.map(title=>(<>
                            {/* {console.log('call the titile',title)} */}
                           <span style={{spacing:'1', marginTop:'10px', marginLeft:'10px',marginBottom:'10px',marginRight:'10px'}}>
                    <Chip icon={<CloseIcon position= "absolute"
                     onClick={()=>value.handleOnClose(title)}/>}  position= "relative" label={title} style={{marginBottom:'10px'}} ></Chip>
                </span>
               </> ))}
               

                           <div style={{display:'flex',justifyContent:'end',alignItems:'end',margin:'10px'}}>
                
                           <Button variant="outlined" style={{margin:'10px'}} onClick={(e)=>cancelExpand(e)}>Cancel</Button>
                            <Button variant="contained" style={{margin:'10px'}} onClick={(e)=>{value.handleSaveTitle();
                            cancelExpand(e)}} >Save</Button>
                            </div>
                          

                            </> : null}          
                </Card>
            </Grid>
            <Grid xs={6} md={6} lg={6}>
            <Card style={{fontSize:'13px' ,marginLeft:'10px',padding:'10px'}} onClick={()=>setDominsFlag(true)}>Applicable Domains
        {dominsFlag ?<>
                <FormControl fullWidth sx={{ m: 1 }} size='small'> 
                               <OutlinedInput id="outlined-adornment-amount"  style={{margin:'10px'}} startAdornment={<InputAdornment position="start" >
                                   <SearchIcon/></InputAdornment>}/>
                           </FormControl>
                           {value.applicabledomains.map(domain=>(<>
                               {/* {console.log('domain titile is working',domain)} */}
                            <span style={{spacing:'1', marginTop:'10px', marginLeft:'10px',marginBottom:'10px',marginRight:'10px'}}>
                    <Chip icon={<CloseIcon  position= "absolute" onClick={()=>value.handleDomainClose(domain)}/>}  position= "relative" label={domain} style={{marginBottom:'10px'}} ></Chip>
                </span>

                            
                </> ))}
           
                
                           <div style={{display:'flex',justifyContent:'end',alignItems:'end',margin:'10px'}}>
                           <Button variant="outlined" style={{margin:'10px'}} onClick={(e)=>cancelExpand(e)}>Cancel</Button>
                            <Button variant="contained" style={{margin:'10px'}} onClick={(e)=>{value.handleDomainSave();
                            cancelExpand(e)}} >Save</Button>
                            </div>
            </>:null}</Card>
            </Grid>

        </Grid><hr></hr>
        <Grid container spacing={2} marginTop="10px" marginLeft='10px' marginRight='10px' sx={{display:'flex', justifyContent:'space-between'}} paddingBottom='10px'>
            <Grid >
                <Typography fontSize='13px' >Your Skills</Typography>
                <span style={{fontSize:'12px'}} >Pathfinder has added your skills from your resume and company records</span>
            </Grid>
            <Grid sx={{ display:'flex',marginRight:'10px' }}>
                <Button variant="outlined" onClick={()=>handleOpen(null)}> <AddCircleOutlineIcon/>Add Skill</Button>
            </Grid>
        </Grid>
        
        <Grid container spacing={2} marginBottom='10px' marginTop="10px" marginLeft='10px' > 
            <Grid  sx={{display:'flex'}}>
            
            
                <Card style={{padding:'10px'}} >
                <Typography fontSize='13px' marginBottom='10px' >Primary Skills</Typography>
              
                   {value.skills.filter(skill => skill.skill_type == 'primary').map(item =>(
                     <span style={{spacing:'1', marginTop:'10px', marginLeft:'10px',marginBottom:'10px',marginRight:'10px'}}>
                          {/* {console.log('the skills are', item.name)} */}
                     <Chip  label={item.name} size="small" icon={<EditIcon onClick={()=>handleOpen(item)} />} ></Chip>
                     
            </span>

                   ))
}          
                </Card>  
            </Grid>
 </Grid>
         
        <Grid container spacing={2} marginBottom='10px' marginTop="10px" marginLeft='10px'>
            <Grid>
                <Card style={{padding:'10px'}}>
                    <Typography fontSize='13px'>Secondary Skills</Typography>
                    {value.skills.filter(data=>data.skill_type == 'secondary').map(skill =>(
                        <span style={{spacing:'3', marginTop:'10px', marginLeft:'10px',marginBottom:'10px',marginRight:'10px'}}>
                        <Chip label={skill.name}  icon={<EditIcon onClick={()=>handleOpen(skill)}></EditIcon>} style={{marginBottom:'10px'}}> </Chip>
                        
                    </span>

                    ))}
                        
                   
                </Card>
            </Grid>

        </Grid>
        { open ?<AddSkill handleOnClose={handleOnClose}  item={item} open={open}/>:null}
        </> )}
        </ProfileContext.Consumer>
        </> 
    )
}
export default SkillTab