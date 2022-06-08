import { Box,Typography } from "@mui/material";
import React from "react";
import ListCoursComponent from "../components/listCours";
import Service from "../services";

export default function PlanningPage(){ 
    const services = Service.getCours();
    return(
        <Box>
            <Typography  margin={"8px"} textAlign={"center"} fontWeight={"bold"} fontSize={"60px"} fontFamily={"Consolas"}>
                PLANNING
            </Typography>
            <Box>
                <ListCoursComponent services={services} admin={false} />
            </Box>
        </Box>
    )
}