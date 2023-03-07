import React from "react";
import SearchBar from "./SearchBar";
import SmartJobStore from "./SmartJobStore";
import { SmartJobContent } from "./SmartJobStore";
import FilterJobs from "./FilterJobs";
import Branch from "./Branch";
import {Grid,Button,MenuItem,Select,FormControl,InputLabel} from "@mui/material"
function SmartJobs(){
    return(<>
    <SmartJobStore>
    <SmartJobContent.Consumer>
      {value=>(<>
       
    <SearchBar/>
<div style={{display:'flex', justifyContent:'space-between',alignItems:'end',marginLeft:'10px', fontSize:'10px'}} >
<span>Filter</span>



  
<div style={{display:'flex',justifyContent:'flex-end', alignItems:'end'}} >
<span>Short by </span>
<Select size="small"  margin="10px">
        {value.smartjob.map(item=>(<>
        
          <MenuItem value={10}>{item}</MenuItem>
          </>))}
          
        </Select>
     

      {/* smart_job_sorting_options */}


</div>



</div>
    <Grid container  >
  
  
        <Grid xs={3} md={3} lg={3}>
        <FilterJobs/>

        </Grid>
        <Grid xs={9} md={9} lg={9} style={{display:'flex',alignItems:'flex-start'}}>
            <Branch/>

        </Grid>

    </Grid>

</>)}
    </SmartJobContent.Consumer>
    </SmartJobStore>
   </> )
}
export default SmartJobs