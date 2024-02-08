    import { useEffect,useState } from "react"
    import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer"



    const RestaurantMenu = ()=>{
       const  {id} = useParams()
        const [countryInfo,setCountryInfo] = useState(null)
        useEffect(()=>{
            fetchResaurent()
        },[])
        const fetchResaurent =async ()=>{
          const response =  await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
          const data =  await response.json();
            console.log(data);
            setCountryInfo(data[0]);
        }

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