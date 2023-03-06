import React, { useState } from "react";
import logo from '../react.jpg';
import logo1 from'../edge.png';
import { Box,Grid,  Card, CardContent, TextField, Button } from '@mui/material'
import { Link } from "@mui/icons-material";
import axios  from 'axios'
import './login.css'
import {  useNavigate } from "react-router-dom";

function Login(){
    const[username, updateusername] = useState('')
    const[password, updatepassword] = useState('')
    const navigate = useNavigate()

    const handleonClick=()=>{
        // console.log('clicked or not')  
        let payload = {password:password,username:username}
        axios.post('https://tdp--qa--pathfinder.edgenetworks.ai/pf/v1/login',payload).then(res=>{
            localStorage.setItem('access_token',res.data.access_token)
            localStorage.setItem('candidate_id',res.data.candidate_id)
            localStorage.setItem('app_id',res.data.candidate_id)
            localStorage.setItem('client_id',res.data.candidate_id)
            localStorage.setItem('tenant_id',res.data.tenant_id)
          return  navigate(`/Home/Profile`)


        }).catch(err =>{
            
            

        })
    
    }
    const handleUsername=(event)=>{
        console.log('username')
        updateusername(event.target.value)
    
    }
    const handlePassword=(event)=>{
        console.log('password')
        updatepassword(event.target.value)
    } 
    return(
    <>
    <Box marginRight={10} marginBottom={5} marginTop={10} marginY={2}> 
    
    <Grid container spacing={0} direction="column" alignItems="flex-end" >
    <Card >
        <img src={logo1}></img>
        <CardContent>
            <div>
            
        <TextField id="outlined-basic" label="username" value={username} variant="outlined" onChange={handleUsername}/></div>
        <div>
        <TextField id="outlined-basic" label='password' value={password} type='password' variant="outlined" onChange={handlePassword}/>
        </div>
        </CardContent>

        <div style={{disply:'flex', justifyContent:'end',alignItems:'end' , margin:'10px'}}> Forgot Password
        <span style={{disply:'flex', justifyContent:'end',alignItems:'end' , margin:'10px'}}> <Button variant="contained" onClick={handleonClick}>LOG IN</Button>
        </span></div>
       
       
    </Card>
    </Grid> 
    
    </Box>
    </>
        

    )
}
export default Login