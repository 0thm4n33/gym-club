import React from "react";
import rootStyle from "../styles/layout.module.css";

export default function Layout({navbar,children}){
    return(
        <div className={rootStyle.root}>
            <div className={rootStyle.rootHeader}>
                {navbar}
            </div>
            <div className={rootStyle.body}>
                {children}
            </div>
        </div>
    )
}