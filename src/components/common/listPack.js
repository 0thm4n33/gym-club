import { Box } from "@mui/material";
import React from "react";
import DetailOffre from "./detailOffre";
import SwipeList from "./swipList";

export default function ListPack({packs,onPackClick}){
    return(
        <Box margin={"10px"}  sx={{padding:"5px",backgroundColor:"#ffffff33",
        boxShadow:"0 4px 40 px #0000001a",backdropFilter:"blur(5px)"
        }}>
            <SwipeList  length={packs.length}>
                {packs.map((pack)=>(
                    <DetailOffre 
                        key={pack.title}
                        id={pack.id}
                        title={pack.title} 
                        prix={pack.prix}
                        services={pack.services}
                        activities={pack.cours}
                        onClick={onPackClick}
                    />
                ))}
            </SwipeList> 
        </Box>
    )
}