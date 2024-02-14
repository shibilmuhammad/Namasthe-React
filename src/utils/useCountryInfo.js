 import { useState,useEffect } from "react";
 const useCountryInfo = (id)=>{
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
        return countryInfo
}
export default useCountryInfo