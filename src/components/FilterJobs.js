import React, { useState }  from "react";
import { SmartJobContent } from "./SmartJobStore";
import SearchIcon from '@mui/icons-material/Search';
import { Card,FormControl,OutlinedInput,Switch } from "@mui/material";

function FilterJobs(){
    const [item,updateItem]=useState('')
    const [checked,updateChecked]= useState(false)
    const handleOnChange=(event)=>{
        updateItem(event.target.value)


    }
    const handleSwitchOnChange=(event)=>{
        updateChecked(event.target.value)
    }
    return(
        <>
        <SmartJobContent.Consumer>
            {value=>(<>
            <Card>
            
            {value.filter?.map(item=>(<>
                <span>{item.display_name}</span>

                <FormControl high sx={{ m: 1,height:20 }} >
          <OutlinedInput type={item.filter_type} onChange={(event)=> value.handleOnChange(event.target.value,item)} 
          sx={{ m: 1,height:20 }} startAdornment={<SearchIcon position="start"  
           ></SearchIcon>}
          
          />
        </FormControl></>
                
                
            
            
        ))}
            </Card>
            <Card>
            {value.id?.map(item=>(<>
                <Switch  checked={checked} onChange={handleSwitchOnChange} ></Switch>
                <span>{item.display_name}</span>
                </>))}
            </Card>
            
               
            
            </>)}
            
           
                
            
        </SmartJobContent.Consumer>
        </>
    )
}
export default FilterJobs