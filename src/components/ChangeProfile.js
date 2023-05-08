import { useState } from "react"
import { useContext } from "react"
import {AppContext} from "../App"

export const ChangeProfile = (props) => { 
    const {setUsername} = useContext(AppContext)

    const [newUsername,setNewUsername] = useState("")
    return ( 
        <div> 
            <input onChange={(event)=>{ 
                console.log(event.target.value)      
                setNewUsername(event.target.value)
            }} /> <br/>
            <button onClick={()=>{
                setUsername(newUsername)
            }}>
                Change Username
                
                </button>
        </div>
    )
}