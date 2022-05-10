import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../styles/navbar.module.css";
export default function NavBar(){
    return(
        <AppBar sx={{backgroundColor:"black",opacity:"1"}}>
            <Toolbar>
                <div className={navStyle.navWrapper}>
                    <div className={navStyle.navLogo}>
                        <div className={navStyle.logo}>
                             GYM YOUSSY
                        </div>
                        <Button size="medium" sx={{color:"white", border:"3px solid white",height:"76%",marginTop:"15px"}}>
                            <Link style={{textDecoration:"none",color:"white"}} to={'/membres'}>Espace Membre</Link>
                        </Button>
                    </div>  
                    <div className={navStyle.navLink}>
                        <a href="http://">cours</a>
                        <a href="http://">planning</a>
                        <a href="http://">cours</a>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}