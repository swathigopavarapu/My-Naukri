import React, { Children, createContext, useEffect, useState } from "react";
import Api from './api'
export const SmartJobContent = createContext();
const SmartJobStore = (props) =>{
    const[payload,updatePayload]=useState({candidate_id:"EN1004",
    query:'',location:'',pg_no:1,"keyword":"",
    smart_job_filters:[{filter_id:"smart_job_preferences",
    value:"N"},{filter_id:"smart_job_skills",
    value:"N"},{filter_id:"smart_job_eligible",
    value:"N"}],show_jobs:[],standard_filters:[],smart_job_sorting:"relevance",active:"location"})

    const[filter,updateFilter]=useState([])
    const[id,updateId]=useState([])
    const[smartjob,updateSmartJob]=useState([])
    

    useEffect(()=>{
        getFilter()
    },[])
    
    const handleSkills=()=>{ 
        Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/result_filters`,payload).then(res=>{
            console.log('payload',res.data)
           

           

        })
    }
    const getFilter=()=>{
        Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/filters/EN1004/pf-dev').then(res=>{
            console.log('Get Filter',res.data.standard_filters)
            updateFilter(res.data.standard_filters)
            console.log('Get Filter',res.data.smart_job_filters)
            updateId(res.data.smart_job_filters)
            console.log('smart job',res.data.smart_job_sorting_options)
            updateSmartJob(res.data.smart_job_sorting_options)
            // updatePayload(payload)
            
                
        })

        
    }
    const handleOnChange=(event,item)=>{


        let filters = payload.standard_filters;
        
        filters.push({filter_id: item.filter_id, value: event})

        updatePayload({...payload,standard_filters:filters})
        console.log('onchange',payload)  
    
    
    }
    


return(
    <>
    <SmartJobContent.Provider value={{
        payload:payload,
        handleSkills:handleSkills,
        getFilter:getFilter,
        handleOnChange:handleOnChange,
        filter:filter,
        id:id,
        smartjob:smartjob

    }}>
        {props.children}
    </SmartJobContent.Provider>
    </>
)
}
export default SmartJobStore