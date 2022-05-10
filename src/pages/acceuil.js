import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "../styles/acceuill.module.css";
import Description from "../components/description";
import OffreList from "../components/offreList";
import service from "../services/index.js"
import ServiceList from "../components/serviceList";
export default function AcceuilPage(){
    const image = require('../images/gym.jpg')
    return(
        <div style={{backgroundColor:"black"}}>
            <Description 
            image={image} title={"GYM YOUSSY"} 
            subtitle={"Le lieu emblématique du Fitness, découvrez nos univers sport dans une multitude d'espace."}
            />
            <div className={style.offreWrapper}>
                <OffreList offres={["Classic","Etudiant"]}/>
                <Box display={"flex"} justifyContent={"center"} sx={{backgroundColor:"black"}}>
                <Button 
                    size="medium" 
                    sx={{
                        margin:"10px",
                        backgroundColor:"#4285F4",
                        color:"white",
                        width:"90%",
                        fontWeight:"bold"}}
                    >
                    Inscription
                </Button>
            </Box>
            </div>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Typography 
                        variant="h3" 
                        margin={"60px"}
                        fontFamily={"Bitter"}
                        fontWeight={"bold"}                         
                    >
                        NOS SERVICES
                    </Typography>
            </Box>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
               
                >
                <ServiceList services={service.getGymServices()} />
            </Box>  
        </div>
    )
}