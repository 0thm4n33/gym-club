import { Box, Button, Typography } from "@mui/material";
import React from "react";
import OffreComponent from "./offre";
import style from "../styles/acceuill.module.css";

export default function OffreList({offres}){
    return(
        <div>
            <div className={style.titleOffre}>
                    <Typography variant="h3" fontWeight={"bold"} fontFamily={"Bitter"}>DÉCOUVREZ</Typography> 
                    <Typography variant="h3" fontWeight={"bold"} fontFamily={"Bitter"}>nos offres</Typography> 
                </div>
                <Box sx={{flexDirection:{xs:"column",md:"row"},justifyContent:"center"}} className={style.offres}>
                    {
                        offres.map(offre => (
                            <Box sx={{margin:"10px",textAlign:"center",width:{md:"50%"}}}>
                                <OffreComponent nom={offre}/> 
                            </Box>
                        ))
                     }
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography 
                        variant="h3" 
                        fontFamily={"Bitter"} 
                        textAlign={"center"} 
                        padding={"10px"}
                        color={"#4285F4"}
                        fontWeight={"bold"}
                        >ELLES DONNENT ACCES A :
                    </Typography>
                    <Box sx={{width:"65%",textAlign:"center",margin:"20px"}}>
                        <Typography variant="div" fontWeight={"bold"}>
                            Cours collectifs de Fitness / RPM cinéma et coaché / Functional training / Cross Training / Boxe /
                            TRX / Grit / Circuit Training / Sprint / Yoga / Espace Musculation / Cardio-Training
                        </Typography>
                    </Box>
                    <Button size="large" sx={{margin:"10px",marginBottom:"80px",backgroundColor:"#4285F4",color:"white",width:"25%",fontWeight:"bold"}}>Inscription</Button>
                </Box>  
        </div>
    )
}