import { Box, Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Services from "../services";
import { useNavigate } from "react-router-dom";

export default function AuthentificationPage(){
    const navigate = useNavigate();
    
    const [user,setUser] = useState({
        login:"",
        password:""
    })

    const handleOnSubmit = () =>{
        console.log(`user form : ${user.login}`)
        const isAuth = Services.authenticate(user);
        isAuth !== undefined && navigate('/members/admin/');
    }

    const handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user,[name]:value});
    }

    return(
        <Box display={"flex"} justifyContent={"center"}>
            <Box sx={{
                marginTop:"10px",width:"40%",height:"70vh",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Typography sx={{borderBottom:"2px solid black",textAlign:"center",padding:"10px",margin:"20px"}}>GYM YOUSSI</Typography>
              <FormControl>
                  {['login','password'].map(field =>(
                      field === "password" ? 
                      <TextField label={field} name={"password"} type={"password"} sx={{margin:"10px"}} value={user.password} onChange={handleOnChange} /> :
                      <TextField label={field} name={"login"} type={"text"} sx={{margin:"10px"}} value={user.login} onChange={handleOnChange}/>
                  ))}
              </FormControl>
              <Stack flexDirection={"row-reverse"}>
                    <Button sx={{color:"black"}} onClick={handleOnSubmit}>
                        SE CONNECTER
                    </Button>
              </Stack>
            </Box>
        </Box>
    )
}