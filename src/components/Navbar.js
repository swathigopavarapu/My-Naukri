import { ListItemIcon, MenuItem, MenuList, Paper, Stack,Table,TableRow } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RouteIcon from '@mui/icons-material/Route';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <diiv>
           {/* <Link to='/'></Link> 
           <Link to= '/Home'>Home </Link> 
             <Link to= '/Home/Profile'>Profile</Link>  */}
            <Table>
                <TableRow>

                
            
                <MenuList> 
                    <MenuItem>
                      <ListItemIcon>
                         <GridViewIcon/>
                       </ListItemIcon>
                    </MenuItem>
                    <MenuItem>
                       <ListItemIcon>
                        <Link to= '/Home/Profile'><PermIdentityIcon /></Link>
                        </ListItemIcon>
                    </MenuItem>
                        <MenuItem>
                          <ListItemIcon>  
                             <WorkOutlineIcon/>
                          </ListItemIcon>
                        </MenuItem>
                       <MenuItem>
                           <ListItemIcon>
                              <DoneAllIcon/>
                            </ListItemIcon>
                       </MenuItem>
                         <MenuItem>
                            <ListItemIcon>

                              <LightbulbIcon/>
                             </ListItemIcon>
                        </MenuItem>
                      <MenuItem>
                         <ListItemIcon>
                         <RouteIcon/>
                          </ListItemIcon>
                    </MenuItem>
                     <MenuItem>
                       <ListItemIcon>
                           <LineStyleIcon/>
                    </ListItemIcon>
                    </MenuItem>
                </MenuList>
            
            </TableRow>
            </Table>
        </diiv>
    )
}
export default Navbar