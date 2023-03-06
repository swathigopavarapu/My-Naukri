import { Modal,Box,Button,Grid,Typography,TextField,FormControl,InputLabel,InputAdornment,OutlinedInput,MenuItem,Select} from "@mui/material";
import React, { useEffect, useState } from "react";
import './Delete.css';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Foundation, Update } from "@mui/icons-material";
import { type } from "@testing-library/user-event/dist/type";
import { ProfileContext } from "./ProfileStore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function AddSkill(props){
    const [skillFlag,setSkillFlag] = useState(false)
    const [secondaryFlag,updateSecondaryFlag]=useState(false)
    const[foundationflag,updateFoundationFlag]=useState(false)
    const[intermediateflag,updateIntermediateFlag]=useState(false)
    const [advanceflag, updateAdvanceFlag]=useState(false);
     const[saveflage,updateSaveFalge]=useState(false)
     

    const [proficiency,updateProficiency]=useState(['Foundation','Intermediate','Advanced','Expert'])
    const [payload,setPayload] = useState({candidate_id:"EN1004",
        experience_in_months: 0,
        experience_in_years:0,
        last_used_month:0,
        last_used_year:0,
        name:"",
        proficiency : "intermediate",
        skill_type: "primary"
    })


    useEffect(()=>{
        console.log('item will be updated',props.item)
        setPayload(props.item)
    },[])

    const [usedskill,updateUsedSkill]=useState('')
    const [experience_in_months,updateExperience_in_Months]=useState('')
    const [experience_in_years,updateExperience_in_Years]=useState('')
    const handleOnClose=()=>{
        props.handleOnClose()

    }
    const handleNameChange=(name)=>{
        console.log('pass the name',name)
        setPayload({...payload,name:name.target.value})
    }
    const handleSave=()=>{
        console.log('save button is working')
    }



const handlesaveFlage=()=>{
    updateSaveFalge(true)
}

    
    const handlePrimary=(type)=>{
        setSkillFlag(true)
        updateSecondaryFlag(false)
        
        setPayload({...payload,skill_type:type})// de structuring object like spred operator
        // console.log(type) 
            
    }
    const handleSecondary=(click)=>{
        setPayload({...payload,skill_type:click})
        updateSecondaryFlag(true)
        setSkillFlag(false)
        
        // console.log(click)

    }
    const handleFoundation =(skills)=>{
        setPayload({...payload,proficiency:skills})
        // updateProficiency()
        // updateFoundationFlag(true)
        // updateIntermediateFlag(false)
        // updateAdvanceFlag(false)


    }
    const handleChange =(event)=>{
       console.log('the date,',new Date().getMonth())
switch (event.target.value) {
    case 1:
        setPayload({...payload,last_used_month:new Date().getMonth(),last_used_year:new Date().getFullYear()
        })
        case 2:
        setPayload({...payload,last_used_month:0,last_used_year:new Date().getFullYear()
        })
        case 3:
        setPayload({...payload,last_used_month:0,last_used_year:(new Date().getFullYear() -1)
        })
        
        break;

    default:
        break;
}


        updateUsedSkill(event.target.value)

    }
    const handleMonthsChange=(event)=>{
        setPayload({...payload,experience_in_months:event.target.value})
      
        
    }
    const handleYearsChange=(event)=>{
        setPayload({...payload,experience_in_years:event.target.value})

    }
    

    return(
        <>
        <ProfileContext.Consumer>
            {value=>(
        <Modal 
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <div className="modalClass">
            <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px',marginLeft:'10px'}}>


<div style={{fontSize:'13px'}}>{props.item ? 'Edit skill' : 'AddSkill'} </div>
            <div >
                <Button onClick={handleOnClose} >X</Button></div>
               
            </div><hr></hr>
            <div style={{fontSize:'13px',marginLeft:'10px'}} >Skill name *</div>
            <Grid container spacing={2} margin='10px'>
                        
                     <Grid sx={{display: 'flex',flexDirection: 'row',alignItems:'center'}} >
                            
                        <FormControl fullWidth sx={{ m: 1 }} size='small' >
                            <OutlinedInput id="outlined-adornment-amount" value={payload?.name} onChange={(e)=>handleNameChange(e)} startAdornment={<InputAdornment position="start" >
                                <SearchIcon/></InputAdornment>}/>
                        </FormControl>

                    </Grid>
            </Grid>
            <div style={{fontSize:'13px',marginLeft:'10px'}}>What type of Skill? *</div>
            <Grid container spacing={1} margin='10px'>
                <Grid  value={payload?.skill_type}>
                
            <div className={skillFlag || payload?.skill_type == 'primary' ? "divClassSelected": "divClass"}
             onClick={() => handlePrimary('primary')} value={payload?.skill_type}>
                <span style={{size:'small'}}>
                    <CheckCircleOutlineIcon style={{size:'small',zoom:'0.7'}} ></CheckCircleOutlineIcon>
                </span>
                <span style={{spacing:'10px',margin:'1px',fontSize:'13px'}} >Primary</span>
            </div>
                </Grid>
                <Grid >
                <div className={secondaryFlag  || payload?.skill_type == 'secondary' ? "divClassSelected": "divClass"} 
                onClick={()=>handleSecondary('secondary')}>
                <span style={{size:'small'}}><CheckCircleOutlineIcon style={{size:'small',zoom:'0.7'}} >
                    </CheckCircleOutlineIcon></span>
                <span style={{spacing:'10px',margin:'1px',fontSize:'13px'}}>Secondary</span>
            </div>

                </Grid>
            </Grid>
            {console.log('the payload', payload)}
            
            <div style={{fontSize:'13px',marginLeft:'10px'}}>What is your skill proficiency?*</div>
           
            <Grid container spacing={1} margin='10px'>
                <Grid style={{display:'flex', justifyContent:'row',alignItems:'center'}}>
                {proficiency.map(skills=>(<>
                    <div className={foundationflag ? "divClassSelected": "divClass"}
                     onClick={()=>handleFoundation(skills)}>

                        <span style={{size:'small'}}><CheckCircleOutlineIcon style={{size:'small',zoom:'0.7'}} >
                            </CheckCircleOutlineIcon></span>
                        <span style={{spacing:'10px',margin:'1px', fontSize:'13px'}}>{skills}</span>
                    </div></>  ))}

                </Grid>
              
               
              

            </Grid>
            
            <div style={{fontSize:'13px',marginLeft:'10px'}}>When did you last use this skill?*</div>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
      
      <Select labelId="demo-select-small" id="demo-select-small" onChange={handleChange} >
        <MenuItem style={{fontSize:'13px'}} >
          <em >Last Used Skill Period</em>
        </MenuItem>
        <MenuItem value={1}  style={{fontSize:'13px'}}>Currently Using</MenuItem>
        <MenuItem value={2}  style={{fontSize:'13px'}}>Frequently used in the last 1 yeaar</MenuItem>
        <MenuItem value={3}  style={{fontSize:'13px'}}>Not used for over a Year</MenuItem>
      </Select>
    </FormControl>
            
            <div style={{fontSize:'13px',marginLeft:'10px'}}>How many years of experience do you have with this skill?*</div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      
      <Select labelId="demo-select-small" id="demo-select-small" onChange={handleYearsChange} value={payload?.experience_in_years}>
        <MenuItem style={{fontSize:'13px'}} >
          <em >years</em>
        </MenuItem>
        <MenuItem value={0}  style={{fontSize:'13px'}}>0 Years</MenuItem>
        <MenuItem value={1}  style={{fontSize:'13px'}}>1 Year</MenuItem>
        <MenuItem value={2}  style={{fontSize:'13px'}}>2 Year</MenuItem>
        <MenuItem value={3}  style={{fontSize:'13px'}}>3 Year</MenuItem>
        <MenuItem value={4}  style={{fontSize:'13px'}}>4 Year</MenuItem>
        <MenuItem value={5}  style={{fontSize:'13px'}}>5 Year</MenuItem>
        <MenuItem value={6}  style={{fontSize:'13px'}}>6 Year</MenuItem>
        <MenuItem value={7}  style={{fontSize:'13px'}}>7 Year</MenuItem>
        <MenuItem value={8}  style={{fontSize:'13px'}}>8 Year</MenuItem>
        <MenuItem value={9}  style={{fontSize:'13px'}}>9 Year</MenuItem>
        <MenuItem value={10}  style={{fontSize:'13px'}}>10+ Years</MenuItem>
        

      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      
      <Select labelId="demo-select-small" id="demo-select-small" onChange={handleMonthsChange} value={payload?.experience_in_months}>
        <MenuItem style={{fontSize:'13px'}} >
          <em >Months</em>
        </MenuItem>
        <MenuItem value={0}  style={{fontSize:'13px'}}>0 Months</MenuItem>
        <MenuItem value={1}  style={{fontSize:'13px'}}>1 Month</MenuItem>
        <MenuItem value={2}  style={{fontSize:'13px'}}>2 Months</MenuItem>
        <MenuItem value={3}  style={{fontSize:'13px'}}>3 Months</MenuItem>
        <MenuItem value={4}  style={{fontSize:'13px'}}>4 Months</MenuItem>
        <MenuItem value={5}  style={{fontSize:'13px'}}>5 Months</MenuItem>
        <MenuItem value={6}  style={{fontSize:'13px'}}>6 Months</MenuItem>
        <MenuItem value={7}  style={{fontSize:'13px'}}>7 Months</MenuItem>
        <MenuItem value={8}  style={{fontSize:'13px'}}>8 Months</MenuItem>
        <MenuItem value={9}  style={{fontSize:'13px'}}>9 Months</MenuItem>
        <MenuItem value={10}  style={{fontSize:'13px'}}>10 Months</MenuItem>
        <MenuItem value={11}  style={{fontSize:'13px'}}>11+ Months</MenuItem>

        

      </Select>
    </FormControl>
    {props.item ?
    <> <div style={{display:'flex', justifyContent:'end', alignItems:'end', margin:'10px'}}>
    <Button variant="contained" onClick={()=>value.handleUpdateSkills(payload)} >Update</Button>
</div>
<span>
  <Button variant="outlined"  onClick={()=>value.handleDeleteSkill(payload)}> <DeleteForeverIcon/> Delete Skill</Button>
</span></> : <div style={{display:'flex', justifyContent:'end', alignItems:'end', margin:'10px'}}>
        
        <Button variant="contained" onClick={()=>value.handleSaveSkills(payload)}>Save</Button></div>}
    
        


                        

  </div>
        </Modal>
            )}
        </ProfileContext.Consumer>
        </>
    )

}
export default AddSkill