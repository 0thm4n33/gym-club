import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../../styles/navbar.module.css";
import Service from "../../services";
import authContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";



const navAdmin = [
    {title:"Moniteur",items:[
        {nom:"Ajouter",link:"#"},
        {nom:"Modifier",link:"#"},
        {nom:"Supprimer",link:"#"},
        {nom:"Lister",link:"#"}
    ]}
]

const navAdherent = [
    {nom:"cours",url:"/cours"},
    {nom:"planning",url:"/planning"},
]

export default function NavBar(){
    let {authenticated,setAuth} = React.useContext(authContext);
    let titles = authenticated === 'adh' ? navAdherent : navAdmin;
    const navigate = useNavigate();
    
    const handleOnClick = (event) =>{
        const value = event.target.text;
        if(value === "LOGOUT"){
            setAuth('');
            navigate("/");
        }
    }

    return(
        <AppBar sx={{margin:"auto",backgroundColor:"black",opacity:"1"}}>
            <Toolbar>
                <div className={navStyle.navWrapper}>
                    <div className={navStyle.navLogo}>
                        <div className={navStyle.logo}>
                            {Service.gymName}
                        </div>
                        <Button  
                            size="medium" 
                            sx={{
                                border:"1px solid #94A1b2",
                                color:"white",
                                height:"76%",
                                marginTop:"15px",
                                }}
                            onClick={handleOnClick}
                            >
                            <Link style={{fontFamily:"Bitter",textDecoration:"none",color:"white"}} to={'/members'}>
                                {authenticated === '' ? "ESPACE MEMBRE" : "LOGOUT"}
                            </Link>
                        </Button>
                    </div>  
                    <div className={navStyle.navLink}>
                        {navAdherent.map(nv=>(
                            <a href={nv.url}>{nv.nom}</a>
                        ))}
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}