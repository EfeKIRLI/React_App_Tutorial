import { useContext } from "react"
import {AppContext} from "../App"
import {isError, useQuery} from "@tanstack/react-query"
import Axios from "axios"


export const Home = () => { 
    const {username} = useContext(AppContext)
    const {
        data:catData ,
        isLoading,
        isError, 
        refetch,
    } = useQuery(["cat"], () => {
       return Axios.get("https://catfact.ninja/fact")
       .then((res) => res.data)
    });

    if(isError) { 
        return <h1>Sorry there was an error. </h1>
    }

    if(isLoading) { 
        return <h1>Loading...</h1>
    }
    
    return  (
    <h1>
    This is the Home Page user is : {username}<p>{catData?.fact}</p> 
    <button onClick={refetch} > Update </button>
    </h1>
      
    )
    
}