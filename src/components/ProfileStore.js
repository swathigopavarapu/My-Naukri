import React,{createContext, useEffect, useState}from "react";
import axios from 'axios';
import Api from './api'

 export const ProfileContext = createContext();
  

 const ProfileStore = (props) =>{
const[specialisations, updateSpecialisations] = useState([])
const[preferences,updatePreferences]=useState([])
const[projects, updateProjects]=useState([])
const[visa,updateVisa]=useState([])
const [work_experience,updateWork_Experience]= useState([])
const [education,updateEducation] = useState([])

useEffect(()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/specialization/EN1004').then(res=>{
        // console.log('api calling/ or not',res.data.data)
        updateSpecialisations(res.data.data)
        
    

    })
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/preferences/EN1004').then(res=>{
            // console.log('api is working are not',res.data)
            updatePreferences(res.data)          
})
   getProjectDetails();
  getVisaDetails();
  getWorkExperience();
  getEducation();
 

},[])

 const getProjectDetails = () =>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/projects/EN1004').then(res=>{
    console.log('projects file is working or not',res.data)
    updateProjects(res.data.results)
   })
}

const getVisaDetails = () =>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/visa_details/EN1004').then(res=>{
        console.log('visa file is working',res.data)
        updateVisa(res.data)
       })
}
const getWorkExperience = ()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/work_experience/EN1004').then(res=>{
        console.log('work experience is',res.data.data)
        updateWork_Experience(res.data.data)

    })
}
const getEducation = ()=> {
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/education/EN1004').then(res=>{
        console.log('education is ',res.data.data)
        updateEducation(res.data.data)
    })
}


const handleDeleteEducation = (id)=>{
    // console.log('delete education tab working',id)
   Api.delete(`https://tdp--qa--pathfinder.edgenetworks.ai/api/education/${id}`).then(res=>{
    console.log('the response is',res.data)
   })

}
//https://tdp--qa--pathfinder.edgenetworks.ai/api/education

const handleEditEducation =(item)=>{
    delete item.city;
    console.log('edit education,item',item)
    Api.put(`https://tdp--qa--pathfinder.edgenetworks.ai/api/education`,item).then(res=>{

    })
}



return(
    <>
     <ProfileContext.Provider value={{
        specialisations: specialisations,
        preferences: preferences,
        projects: projects,
        visa:visa,
        work_experience:work_experience,
        education,education,
        handleDeleteEducation:handleDeleteEducation,
        handleEditEducation:handleEditEducation
     }}>
{props.children}
     </ProfileContext.Provider>
    </>)
 }
 export default ProfileStore