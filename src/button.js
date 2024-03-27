import React from "react";

const Button=(props)=>{
    return(
       <input type='button' Onclick ={props.handaleClick} value={props.label}/> 
    )
}
export default Button;
