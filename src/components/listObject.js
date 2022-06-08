import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ListObject({title,list}){
    return(
        <Box display={"flex"} padding={"15px"} textAlign={"center"}  margin={"auto"} flexDirection={"column"}>
            <Typography fontSize={"large"} fontWeight={"bold"} color={"black"}>{title}</Typography>
                {list.map(item=>(
                    <Typography fontFamily={"Consolas"} fontSize={"large"}>- {item}</Typography>
                ))}
        </Box>
    )
}