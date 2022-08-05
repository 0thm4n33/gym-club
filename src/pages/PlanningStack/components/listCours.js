import { List } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

import {WeekComponenet,CoursRow} from '../index';

export default function ListCoursComponent({services,admin}){
    const [cours,setCours] = useState([]);
    
    useEffect(()=>{
        if(cours.length === 0){
            coursBuilding('lundi');
        }
    });

    const onSelectedDay = (day) =>{
        coursBuilding(day.toLowerCase());
    }

    const coursBuilding = (day)=>{
        let temporary = [];
        console.log(`day: ${day}`);
        services.forEach(s=>{
           s.temps.forEach(t =>{
                if(t.jour.toLowerCase() === day){
                    let debut = t.heureDebut.split(':',2);
                    let fin =  t.heureFin.split(':',2);
                    let c = {
                        nom: s.nom,
                        niveau: s.niveau,
                        duree : s.duree,
                        jour : t.jour,
                        debut: debut[0] + ":" + debut[1],
                        fin : fin[0] + ':' + fin[1]
                    }
                    temporary.push(c);
                }
           })
        });
        setCours(temporary);
    }
    
    return(
        <>
            <WeekComponenet days={["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]} onChange={onSelectedDay}  />
                <List>
                   {cours.map(c=>(
                        <CoursRow cours={c}  />
                   ))}
                </List>
        </>
    )
}