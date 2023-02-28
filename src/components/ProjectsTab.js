import React from "react";
import { Grid,Card, Typography,Box,Button } from "@mui/material";
import { ProfileContext } from "./ProfileStore";
// import ShowMoreText from "react-show-more-text";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
function ProjectsTab(){
    return(
        <>
        <ProfileContext.Consumer>
            {value=> (
        <Box>
             {console.log('in projectpag ',value)}
        <div>Pathfinder has added your projects from your resume and company records</div>
            <Grid container marginTop={1}  >
                {value.projects.map(responce => (
                <>
               
                <Grid sx={{flexDirection:'row'}} marginRight='15px'marginTop='15px' xs={3} md={3} lg={3} >
                    <Card >
                        <Grid marginLeft='2px'>
                            <Typography fontSize='12px'color='blue' >{responce.project_name}</Typography>
                        </Grid><hr></hr>
                        <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between', marginLeft:'5px',marginRight:'5px'}}>
                        <Typography variant="caption">Project ID</Typography>
                        <Typography variant="caption" >Account Name </Typography> </Grid>
                        <Grid sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-between',marginLeft:'5px',marginRight:'5px'}}>
                        <Typography variant ="caption" fontSize='13px'>{responce.project_id}</Typography>
                        <Typography variant="caption">Edit to select</Typography>
                        </Grid><hr></hr>
                        <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between',marginLeft:'5px',marginRight:'5px'}} >
                            <Typography variant="caption">Project Duration</Typography>
                            <Typography variant="caption" fontSize='13px'>{responce.assignment_start_date} to {responce.assignment_end_date}</Typography>
                        </Grid><hr></hr>
                        <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between',marginLeft:'5px',marginRight:'5px'}}>
                            <Typography variant="caption">Responsibilities</Typography>
                            {/* <ShowMoreText
  more={<ExpandMore />}
  less={<ExpandLess />}
/> */}
                            <Typography variant="caption" fontSize='13px' >
                                {responce.responsibilities}</Typography>
                        </Grid><hr></hr>
                        <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'space-between',marginLeft:'5px',marginRight:'5px'}}>
                            <Typography variant="caption">Skills Used</Typography>
                            {responce.skills.map(item =>(<>
                                
                            
                            <Typography variant="caption" marginBottom='1px'>{item}</Typography>
                            </>))}
                        </Grid><hr></hr>
                          
                        <Grid sx={{display: 'flex',flexDirection: 'column',justifyContent:'flex-end',marginBottom:'30px'}}>
                        <Button  variant="caption"  size="small">Add Members</Button>
                        </Grid>
                        

                    </Card>
                   

                </Grid>
            
                </> ))}
            </Grid>
          
           
                
                
              
             


         

        </Box>
        )}
        </ProfileContext.Consumer>
        
        </>
    )
}
export default ProjectsTab