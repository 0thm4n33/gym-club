import { Box, Typography } from "@mui/material";
import React from "react";
import style from "../styles/acceuill.module.css";
import Description from "../components/description";
import OffreList from "../components/offreList";
import service from "../services/index.js"
import ServiceList from "../components/serviceList";
export default function AcceuilPage(){
    const image = require('../images/gym.jpg')
    return(
        <div>
            <Description 
            image={image} title={"GYM FES"} 
            subtitle={"Le lieu emblématique du Fitness, découvrez nos univers sport dans une multitude d'espace."}
            />
            <div className={style.offreWrapper}>
                <OffreList offres={["Classic","Etudiant"]}/>
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
                margin={"auto"}
                width={"90%"}
                component={"div"}
                >
                <ServiceList services={service.getGymServices()} />
            </Box>
        </div>
    )
}