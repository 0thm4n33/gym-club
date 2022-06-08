import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "../styles/acceuill.module.css";
import Description from "../components/description";
import OffreList from "../components/offreList";
import Service from "../services/index.js"
import { useNavigate } from "react-router-dom";
import ServiceComponenet from "../components/service";
import SwipeList from "../components/swipList";
export default function AcceuilPage(){
    const image = require('../images/gym.jpg');
    const services = Service.getGymServices();
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor:"black"}}>
            <Description 
            image={image} title={Service.gymName} 
            subtitle={"Le lieu emblématique du Fitness, découvrez nos univers sport dans une multitude d'espace."}
            />
            <div className={style.offreWrapper}>
                <OffreList offres={["Complet","Classic"]}/>
                <Box display={"flex"} justifyContent={"center"} sx={{backgroundColor:"black"}}>
                    <Button 
                        size="medium"
                        onClick={()=>navigate('/inscription-adherent')}
                        sx={{
                            margin:"10px",
                            backgroundColor:"#7f5af0",
                            color:"white",
                            width:"90%",
                            fontWeight:"bold"}}
                        >
                            Inscription

                    </Button>
            </Box>
            </div>
            <Box display={"flex"} flexDirection={"column"} margin={"auto"} alignItems={"center"}>
                    <Typography 
                        variant="h3" 
                        marginTop={"60px"}
                        fontFamily={"Bitter"}
                        fontWeight={"bold"} 
                        color={"whitesmoke"}                        
                    >
                        NOS SERVICES
                    </Typography>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        >
                        <SwipeList length={services.length}>
                            {services.map(service =>(
                                <ServiceComponenet
                                    imagePath={service.imagePath} 
                                    nom={service.nom} 
                                    />
                            ))}
                        </SwipeList>
                    </Box>  
            </Box>
        </div>
    )
}