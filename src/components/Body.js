
import Card from "./Card"
import { useState,useEffect } from "react";
import { data } from "autoprefixer";
import Shimmer from "./Shimmer"
import { Error } from "./Error";
import { Link } from "react-router-dom";
const Body = () => {
    
    const [listOfCountry ,setListOfCountry] = useState([]) 
    const [serachValue ,setSearchValue] = useState("")
    const [filteredCountry,setFilteredCountry] = useState([])
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetchData()
        
    },[])
    const fetchData =   async  ()=>{
        try{
            let response = await fetch("https://restcountries.com/v3.1/all")
            let data = await response.json();
            console.log(data);
            setFilteredCountry(data)    
            setListOfCountry(data)
        }catch(error){
            console.log('hi');
            console.error('Error fetching data:', error);
            setError('There was an error fetching the data.');

        }
    }

    return listOfCountry.length===0 ?<Shimmer/>  :  (
        
        <div className="Body-container">
            <div className="filter-contaianer flex  items-center space-x-2">
                <button onClick={function(){
                    let filterResult =  listOfCountry.filter((element)=>element.region==="Europe")
                    setFilteredCountry(filterResult)
                }}  className="bg-blue-100 border border-black px-2 text-xs rounded-md py-1">
                    Europian Countries
                </button>
                <div className="border border-black rounded-md  flex justify-center items-center px-1">
                    <input onChange={(e)=>{  
                        setSearchValue(e.target.value)
                        let FilteredRes = listOfCountry.filter((data)=>{return data.name.common.toLowerCase().includes(serachValue.toLowerCase())})
                        setFilteredCountry(FilteredRes)
                        }} value={serachValue} placeholder="Search here "  className="outline-none placeholder:text-xs"></input>    
                    <button onClick={()=>{
                        let FilteredRes = listOfCountry.filter((data)=>{return data.name.common.toLowerCase().includes(serachValue.toLowerCase())})
                        setFilteredCountry(FilteredRes)
                        }} className="bg-blue-100 object-contain  ">
                        <span className="material-symbols-outlined object-contain ">
                            search
                        </span>
                    </button>
                </div>
            </div>
            <div className="card-container">
                
            {filteredCountry.map((data)=>{
                   return <Link to={`/restaurant/${data.name.common}`} key={data.name.common}><Card  countryData={data}/></Link> 
                })}
                
            </div>

        </div>
    )
}
export default Body