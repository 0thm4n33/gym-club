import { List } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import CoursRow from "./coursRow";
import WeekComponenet from "./days";

export default function ListCoursComponent({services,admin}){
    console.log(`service : ${services}`);
    const [day,setDay] = useState('lundi');
    
    const onSelectedDay = (day) =>{
        console.log(day);
        setDay(day.toLowerCase());
        setCours();
    }
    const columns = [
        {field:"date",headerName:"Date",type:'date',editable:true},
        {field:"service",headerName:"Service",type:'text',editable:true},
        {field:"details",headerName:"Details",type:'text',editable:true},
    ]
    let coursTest = [];
    const setCours = () =>{
        services.forEach(service=>{
            service.cours.forEach(c=>{
                if(c.temps !== undefined){
                    c.temps.forEach((temps,index)=>{
                        if(temps.jour.toLowerCase() === day.toLocaleLowerCase()){
                            coursTest.push({
                                id:index,
                                nameOfService: service.name,
                                nameOfCours: c.coursName,
                                jour: temps.jour,
                                debut: temps.debut,
                                fin: temps.fin,
                                duree:c.duree,
                                niveau:c.niveau
                            })
                        }
                    })
                }
            })
        })
    }
    setCours();
    console.log(`length ${coursTest.length}`)
    return(
        <>
            <WeekComponenet days={["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]} onChange={onSelectedDay}  />
                <List>
                   {coursTest.map(cours=>(
                       <CoursRow cours={cours} />
                   ))}
                </List>
        </>
    )
}