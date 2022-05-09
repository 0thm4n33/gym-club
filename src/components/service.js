import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ServiceComponenet({imagePath,nom,previous,next}){
    return(
        <Box
            display={"flex"} 
            component={"div"} 
            height={"65%"}
            margin={"auto"}
            padding={"auto"}
            sx={{width:"90%",overflow:"hidden"}}
            >
            <Button onClick={previous}>P</Button>
            <Box component={"div"} sx={{backgroundColor:"black",width:"100%"}}>
                <Box
                    sx={{opacity:"0.3"}}
                    width={"100%"}
                    component={"img"}
                    src={require(`../${imagePath}`)}
                />
                <Box 
                    component={"div"}
                    color={"white"}
                    textAlign={"center"}
                    sx={{bottom:"45%",right:"40%",position:"sticky"}}
                    >
                    <Typography variant="h4" fontWeight={"bold"}>{nom}</Typography>
                </Box>
            </Box>
            <Button onClick={next}>S</Button>
        </Box>
    )
}