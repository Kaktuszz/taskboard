import React from "react";
import classes from "./Button.module.css"

const Button =(props)=>{
    if(props.link){
        return <a href={props.link}><button className={classes.buttonstyle}>{props.children}</button></a>
    }
    return <button onClick={props.func} className={classes.buttonstyle}>{props.children}</button>
}


export default Button;