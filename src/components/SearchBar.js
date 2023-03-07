import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartJobStore, { SmartJobContent } from "./SmartJobStore";
import { FormControl, OutlinedInput,InputAdornment, Grid,Input, Button } from "@mui/material";
function SearchBar(){
    const [search,updateSearch]=useState('')
    const [location,updateLocation] = useState('')
    const handleOnChange=(event)=>{
        console.log('search',event.target.value)
        updateSearch(event.target.value)
       
    }
    const handleOnChangeLocation =(event)=>{
    console.log('location',event.target.value)
    updateLocation(event.target.value)
    }

    return(
        <>
       
        <SmartJobContent.Consumer>
            {value=>(

           
       <Grid container spacing={1} style={{display:'flex',alignItems:'center'}}>
        <Grid xs={5} md={5} lg={5} >
        <FormControl fullWidth sx={{ m: 1 }} >
          <OutlinedInput  onChange={handleOnChange}
            id="outlined-adornment-amount"
            startAdornment={<SearchIcon position="start" 
           ></SearchIcon>}
            label="Amount"
          />
        </FormControl>
        </Grid>
        <Grid xs={5} md={5} lg={5}>
        <FormControl fullWidth sx={{ m: 1 }} style={{marginLeft:'10px'}}>
          <OutlinedInput  onChange={handleOnChangeLocation}
            id="outlined-adornment-amount"
            startAdornment={<LocationOnIcon position="start"></LocationOnIcon>}
            label="Amount"
          />
        </FormControl>
        </Grid> 
        <Grid xs={2} md={2} lg={2} >
        <Button variant="contained" style={{marginLeft:'10px'}} onClick={()=>value.handleSkills(search,location)}>Search</Button> 

        </Grid>
        

      

        </Grid>
        
        )}
       </SmartJobContent.Consumer>
       
        
        </>
    )
}
export default SearchBar