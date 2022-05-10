import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";
import ServiceComponenet from "./service";

export default function ServiceList({services}){
    const [steper,setSteper] = useState(0);
    const max = services.length;
    
    const onNextClick = () =>{
        const value = steper + 1;
        value < max && stepChange(value);
    }

    const onPrevClick = () =>{
        const value = steper - 1;
        value >= 0 && stepChange(value);
    }

    const stepChange = (value) =>{
        setSteper(value)
    }
    return(
            <SwipeableViews
                index={steper}
            >
            {services.map(service =>(
                <ServiceComponenet 
                    imagePath={service.imagePath} 
                    nom={service.nom} 
                    next={onNextClick}
                    previous={onPrevClick}
                    />
            ))}
            </SwipeableViews>
    )
}