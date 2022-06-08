import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

export default function Form({handleOnChange,inputs}){
   
    const OnChange = (event)=>{
        handleOnChange(event.target);
    }

    return(
        <Box component={"form"} margin={"10px"}>
            {
                [inputs.map(({label,type,options,required,width})=>(
                    type === "select" ? 
                    <TextField onChange={OnChange} name={label} defaultValue={options[0]} select label={label} 
                        sx={{margin:"5px",width:{md:width,xs:"100%"}}}>
                        {options.map(option=>(
                            <MenuItem value={option} key={option}>{option}</MenuItem>
                        ))}
                    </TextField> :
                    <TextField name={label} onChange={OnChange} label={label} type={type} required={required} sx={{margin:"5px",width:{md:width,xs:"100%"}}}/>
                ))]
            }
        </Box>
    )

}