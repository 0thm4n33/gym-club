import { Box, Typography } from "@mui/material";
import React from "react";

export default function OffreComponent({nom,prix}){
    return(
        <Box sx={{backgroundColor:"black",border:"none",padding:"10px",boxShadow:"5px 8px 8px gray"}}>
            <div sx={{padding:"10px",margin:"40px"}}>
                <Typography sx={{color:"white"}} variant="h5" fontWeight={"bold"} fontFamily={"Bitter"}>
                    OFFRE
                </Typography>
                <Typography variant="h4" color={"#4285F4"} fontWeight="bold" fontFamily={"Bitter"}>
                    {nom}
                </Typography>
            </div>
            <div sx={{padding:"10px",margin:"10px"}}>
                <Typography variant="h5" sx={{backgroundColor:"#4285F4",fontFamily:"Bitter",marginTop:"20px",padding:"10px",color:"white"}}>
                    AVEC ENGAGEMENT (12 MOIS)
                </Typography>
            </div>
            <div sx={{margin:"40px"}}>
                <Typography variant="h3" sx={{color:"white",fontFamily:"Bitter",fontWeight:"bold",margin:"10px"}}>390DH</Typography>
            </div>
            <Typography sx={{color:"white"}}>Frais d’inscription 390,90DH</Typography>
            <Typography sc={{color:"white"}}>Option sans engagement : +50DH /mois</Typography>
        </Box>
    )
}