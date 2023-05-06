import React, { useEffect } from "react";
import { useState } from "react";

export const Text = () => { 
    const [text,setText] = useState(""); 

    useEffect(()=>{ 
        console.log("component Mounted");
        
        return () => { 
            console.log("component unmouted")
        }
    },[text])  //[] trigger the useEffect

    return ( 
        <div> 
            <input 
                onChange={(event)=>{ 
                    setText(event.target.value)
                }} 
                 />
                 <h1>{text}</h1>
        </div>
    )
}