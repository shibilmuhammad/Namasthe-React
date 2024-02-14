    import { useEffect,useState } from "react"
    import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"
import useCountryInfo from "../utils/useCountryInfo"


    const RestaurantMenu = ()=>{
       const  {id} = useParams()
        const countryInfo = useCountryInfo(id)

        if(countryInfo===null){
            return <Shimmer />
        }
        const{flag,area,capital,name} = countryInfo      
        return(
            <div className="m-10 space-y-2">
               
                <h1 className="text-5xl font-semibold ">{name.common}</h1>
                <p>Area : {area}</p>
                <h2 className="text-semibold text-2xl">flag : {flag}</h2>
                <h1>Capital of {name.common} is {capital}</h1>
                <p></p>
            </div>
        )
    }

    export default RestaurantMenu