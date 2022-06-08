import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import descStyle from "../../styles/acceuill.module.css";
export default function Description({image,title,subtitle}){
    return(
    <div>
        <Card sx={{backgroundColor:"black",margin:"5px"}}>
            <CardMedia 
                component={"img"}
                image={image}
                height={400}
                sx={{opacity:"0.5"}}
            />
            <div className={descStyle.text}>
                <Typography color={"#94A1b2"} variant="h2" fontWeight={"bold"} fontFamily={"Bitter"}>{title}</Typography>
                <Typography color={"#94A1b2"} variant="h8" fontWeight={"bold"} fontFamily={"Bitter"}>{subtitle}</Typography>
            </div>
        </Card>
        <Box sx={{backgroundColor:"black",width:"50%",margin:"10px"}}>
                <Typography variant="h4" fontWeight={"bold"} fontFamily={"Bitter"} style={{color:"#94A1b2"}}>
                    DES COURS / DES COACHS SANS ENGAGEMENT
                </Typography>
        </Box>
    </div>
    )
}