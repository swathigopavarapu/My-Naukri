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
const [skills,updateSkills] =useState([])
const [applicabletitles,updatedApplicableTitles]= useState([])
const [applicabledomains,updateApplicableDomains]=useState([])
const [results,updateResults]=useState([])
const[location,updateLocation]=useState([])

useEffect(()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/specialization/EN1004').then(res=>{
        // console.log('api calling/ or not',res.data.data)
        updateSpecialisations(res.data.data)
        

    })
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/preferences/EN1004').then(res=>{
            console.log('api is working are not',res.data)
            updatePreferences(res.data)          
})
   getProjectDetails();
  getVisaDetails();
  getWorkExperience();
  getEducation();
  getSkills();
  getApplicableTitles();
  getApplicableDomains();
  
 

},[])

const handleApplicableTitles=(item)=>{
    console.log('aplicable title',item)
    let titles = applicabletitles;
    titles.push(item)
    console.log('the  updated list is', titles)
    updatedApplicableTitles(titles)
    
   
    
    
  }
//   const getLocation =(location)=>{
    
//     Api.get(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/location_suggestions/${location}`).then(res=>{
//         const results= res.data.results
//         console.log('location is is working',results)
//         updateLocation(results)

//     })
//   }
 

 const getProjectDetails = () =>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/projects/EN1004').then(res=>{
    // console.log('projects file is working or not',res.data)
    updateProjects(res.data.results)
   })
}

const getVisaDetails = () =>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/visa_details/EN1004').then(res=>{
        // console.log('visa file is working',res.data)
        updateVisa(res.data)
       })
}
const getWorkExperience = ()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/work_experience/EN1004').then(res=>{
        // console.log('work experience is',res.data.data)
        updateWork_Experience(res.data.data)

    })
}
const getEducation = ()=> {
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/api/education/EN1004').then(res=>{
        console.log('education is ',res.data.data)
        updateEducation(res.data.data)
    })
}
const getSkills =()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/skills/EN1004').then(res=>{
        console.log('skills requried primary and secondary')
        updateSkills(res.data.results)

    })

}


const handleDeleteEducation = (id)=>{
    // console.log('delete education tab working',id)
   Api.delete(`https://tdp--qa--pathfinder.edgenetworks.ai/api/education/${id}`).then(res=>{
    // console.log('the response is',res.data)
   })

}
//https://tdp--qa--pathfinder.edgenetworks.ai/api/education

const handleEditEducation =(item)=>{
    delete item.city;
    Api.put(`https://tdp--qa--pathfinder.edgenetworks.ai/api/education`,item).then(res=>{

    })
}




const handleDeleteWorkExperience = (id)=>{
    // console.log('delete the work experience button',id)
    Api.delete(`https://tdp--qa--pathfinder.edgenetworks.ai/api/work_experience/${id}`).then(res=>{
        // console.log('delete work experience',res.data)
    })
}
   const handleEditWorkExperience = (item) => {
    delete item.city;
    console.log('edit work experience',item)
    Api.put(`https://tdp--qa--pathfinder.edgenetworks.ai/api/work_experience`,item).then(res=>{
        
    })


    }
const handleDeleteVisa = (id)=>{
    console.log('delete the visa',id)
    Api.delete(`https://tdp--qa--pathfinder.edgenetworks.ai/api/visa_details/${id}`).then(res=>{
        

    })  
}
const handleDeleteSkill= (payload)=>{
    
    // payload.candidate_id = localStorage.getItem('client_id')
    // console.log('this is delete button',payload)
        Api.delete(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/delete_candidate_skill/${payload.id}`).then(res=>{
            console.log('this is delete button',payload)


})}

const handleEditVisa = (id)=>{
    // console.log('edit the visa',id)
    Api.put(`https://tdp--qa--pathfinder.edgenetworks.ai/api/visa_details`,id).then(res=>{
        
    })
}
const handleSaveSkills =(payload)=>{
    // console.log('this is a payload')
   
    Api.post( `https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/skills`,[payload]).then(res=>{
        console.log('updated the skills')

    })

}
const handleAddEducation=(education)=>{
    console.log('add education button is working or not',education)
    delete education.city;
    education.candidate_id = localStorage.getItem('client_id')
    Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/api/education`,education).then(res=>{

    })
}
const getApplicableTitles=()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_titles/EN1004').then(res=>{
        console.log('aplicable title',res.data.results)
        updatedApplicableTitles(res.data.results)

    })

}


const getApplicableDomains=()=>{
    Api.get('https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_domains/EN1004').then(res=>{
        console.log('aplicable domain', res.data)
        updateApplicableDomains(res.data.results)


    })
}
const handleOnClose =(title)=>{
    console.log('close button is working or not',localStorage.getItem('client_id'))
   let arr =  applicabletitles.filter(skill=> skill !== title )
   updatedApplicableTitles(arr)

   console.log('aplicables are filter or not',arr)
//    const payload={candidate_id:localStorage.getItem('client_id'),titles: arr }
//    Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_titles`,payload).then(res=>{
//     console.log('pyload is working or not',payload)
    
//    })
}


 const handleDomainClose=(domain)=>{
    console.log('domain button is working or not',domain)
    let dom = applicabledomains.filter(domains=>domains !== domain)
    updateApplicableDomains(dom)
    console.log('aplicable domain is working or not',dom)
    // const payload={candidate_id:localStorage.getItem('client_id'),domains : dom}
    // Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_domains`,payload).then(res=>{
    //     console.log('domain is working or not',payload)

    // })

 }
 const handleSaveTitle=()=>{
    const payload={candidate_id:localStorage.getItem('client_id'),titles: applicabletitles }
    Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_titles`,payload).then(res=>{
        
    })


 }

 const handleUpdateSkills=(payload)=>{
    console.log('this is a updated skill',payload)
    payload.candidate_id = localStorage.getItem('client_id')
    Api.put(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/skills`,[payload]).then(res=>{
        console.log('handle update skills or working or not', payload)

    })


 }
 const handleDomainSave=()=>{
    
    const payload={candidate_id:localStorage.getItem('client_id'),domains : applicabledomains}
    
    Api.post(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/applicable_domains`,payload).then(res=>{
        console.log('domain is working or not',payload)
        

    })
 }

 const handleProps=(event)=>{
    // console.log('handleprops is working or not',event.target.value)
   
    Api.get(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/title_suggestions/${event.target.value}`).then(res=>{
        console.log('handleprops is working or not',res.data.results)
        const results= res.data.results
        updateResults(results)
        
    })
    
 }
 const handlelocation=(event)=>{
    
    Api.get(`https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/location_suggestions/${event.target.value}`).then(res=>{


       let locationNames= res.data.results?.map(item => item.name)

       console.log('locaton is working or not',locationNames,res.data)

        updateLocation(locationNames)

    })
 }

return(
    <>
     <ProfileContext.Provider value={{
        specialisations: specialisations,
        handlelocation:handlelocation,
        preferences: preferences,
        projects: projects,
        visa:visa,
        work_experience:work_experience,
        education,education,
        location:location,
        skills:skills,
        applicabletitles:applicabletitles,
        applicabledomains:applicabledomains,
        results:results,handleUpdateSkills:
        handleUpdateSkills,
        // getLocation:getLocation,
        handleAddEducation:handleAddEducation,
        handleDeleteSkill:handleDeleteSkill,
        handleApplicableTitles: handleApplicableTitles, 
        handleProps:handleProps,
        handleDomainSave:handleDomainSave,
        handleSaveTitle:handleSaveTitle,
        handleDomainClose:handleDomainClose,
        handleDeleteEducation:handleDeleteEducation,
        handleEditEducation:handleEditEducation,
        handleDeleteWorkExperience:handleDeleteWorkExperience,
        handleEditWorkExperience:handleEditWorkExperience,
        handleDeleteVisa:handleDeleteVisa,
        handleEditVisa:handleEditVisa,handleSaveSkills:handleSaveSkills,
        handleOnClose:handleOnClose

     }}>
{props.children}
     </ProfileContext.Provider>
    </>)
 }
 export default ProfileStore