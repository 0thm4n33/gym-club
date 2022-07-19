import { Box,Button,Typography } from "@mui/material";
import React from "react";
import ListObject from "./listObject";
import "../../assets/images/gymServices/boxing.jpeg";
export default function DetailOffre({id,title,prix,activities,services,onClick}){
    return(
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",margin:"auto",flexDirection:"column"}}>
                <Box sx={{
                    color:"white",
                    gap:"8px",display:"flex",
                    padding:"15px",textAlign:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#2CB67D",borderRadius:"15px"}}
                    >
                    <Box>
                        <Typography fontFamily={"Consolas"} padding={"5px"} variant="h3">{`PACK ${title.toUpperCase()}`}</Typography>
                    </Box>  
                        <Box sx={{display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"}}}>
                                <ListObject title={"ACTIVITES & EQUIPEMENTS"} list={activities.map(ac=>(ac.coursName))} />
                                <ListObject title={"SERVICES INCLUS"} list={services.map(s=>(s.serviceName))}/>
                        </Box>
                        <Typography color={"black"} fontFamily={"Consolas"} fontWeight={"bold"} fontSize={"35px"}>{prix}DH</Typography>
                    </Box>
                    <Button
                         onClick={onClick}
                         id={id}
                         sx={{
                            backgroundColor:"black",
                            color:"white",
                            border:"1px solid black",
                            width:{xs:"80%",md:"90%"},
                            margin:"15px",
                        }}>
                            CHOISIR CE PACK
                </Button>
            </Box>        
    )
}