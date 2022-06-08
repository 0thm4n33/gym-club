import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CoursComponent from "../components/cours";
import Service from "../services";

export default function CoursPage(){
    const cours = Service.getCours();
    return(
        <Box>
            {cours.map(c=>(
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography color={"white"} padding={"5px"} sx={{backgroundColor:"black",fontSize:"30px"}} textAlign={"center"} fontFamily={"Consolas"}>{c.name.toUpperCase()}</Typography>
                    <Box display={"grid"} gridTemplateColumns={'repeat(2,1fr)'} gap={2}>
                        {
                            c.cours.map(cours=>(
                               <CoursComponent cours={cours} />
                            ))
                        }
                    </Box>
                </Box>   
            ))}
        </Box>
    )
}
