import React, { useState } from "react";
import NavBar from "../components/navbar";
import SideBar from "../components/sideBar";
import authContext from "../context/authContext";
import rootStyle from "../styles/layout.module.css";
const items = [
    {
        name:"Gestion Adherent",
        label:"Gestion",
        items:[
            {name:"Lister",url:"/members/admin/"},
        ],
    },
    {
        name:"Gestion Materiel",
        label:"Gestion",
        items:[
            {name:"Ajouter",url:'materiel/add'},
            {name:"Modifier",url:'materiel/modifier'},
            {name:"Supprimer",url:'materiel/delete'}
        ],
    },
    {
        name:"Gestion Moniteur",
        label:"Gestion",
        items:[
            {name:"Ajouter",url:'/members/admin/moniteur-add'},
            {name:"Liste",url:'/members/admin/moniteur-all'},
        ],
    }
]
export default function Layout({children}){
    const [authenticated,setAuth] = useState('');
    return(
        <authContext.Provider value={{authenticated,setAuth}}>
            <div className={authenticated !== 'admin' ? rootStyle.root : rootStyle.adminLayout}>
                <div className={authenticated === 'admin' ? rootStyle.sideBar : null}>
                    {authenticated === 'admin' ? <SideBar items={items} /> : <NavBar /> }
                </div>
                <div className={authenticated === 'admin' ? rootStyle.adminBody : rootStyle.body }>
                    {children}
                </div>
            </div>
        </authContext.Provider>
    )
}