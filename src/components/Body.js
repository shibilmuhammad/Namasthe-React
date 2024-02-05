
import Card from "./Card"
import { useState,useEffect } from "react";
import { data } from "autoprefixer";
import Shimmer from "./Shimmer"
const Body = () => {
    const [listofRestruant ,setlistofRestruant] = useState([]) 
    const [serachValue ,setSearchValue] = useState("")
    const [filteredRes,setFilteredRes] = useState([])
    useEffect(()=>{
        fetchData()
        
    },[])
    const fetchData =   async  ()=>{
        try{
            let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            let data = await response.json();
            setlistofRestruant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRes(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }catch{
            return(
                <h1>Something Went wrong</h1>
            )
        }
    }
    return listofRestruant.length===0 ?<Shimmer/> :  (
        <div className="Body-container">
            <div className="filter-contaianer flex  items-center space-x-2">
                <button onClick={function(){
                    let filteredRestruant =  listofRestruant.filter((element)=>element.info.avgRating>4)
                    setFilteredRes(filteredRestruant)
                }}  className="bg-blue-100 border border-black px-2 text-xs rounded-md py-1">
                    Top rated restaurant
                </button>
                <div className="border border-black rounded-md  flex justify-center items-center px-1">
                    <input onChange={(e)=>{
                        setSearchValue(e.target.value)
                        let FilteredRes = listofRestruant.filter((resData)=>{return resData.info.name.toLowerCase().includes(serachValue.toLowerCase())})
                        setFilteredRes(FilteredRes)
                        }} value={serachValue} placeholder="Search here "  className="outline-none placeholder:text-xs"></input>    
                    <button onClick={()=>{
                        let FilteredRes = listofRestruant.filter((resData)=>{return resData.info.name.toLowerCase().includes(serachValue.toLowerCase())})
                        setFilteredRes(FilteredRes)
                        }} className="bg-blue-100 object-contain  ">
                        <span className="material-symbols-outlined object-contain ">
                            search
                        </span>
                    </button>
                </div>
            </div>
            <div className="card-container">
                
            {filteredRes.map((restrant)=>{
                   return <Card key={restrant.info.id} resData={restrant}/>
                })}
                
            </div>

        </div>
    )
}
export default Body