
import Card from "./Card"
import { restaurantsList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listofRestruant ,setlistofRestruant] = useState(restaurantsList)
    return (
        <div className="Body-container">
            <div className="filter-contaianer">
                <button onClick={function(){
                    let filteredRestruant =  restaurantsList.filter((element)=>element.info.avgRating>4)
                    setlistofRestruant(filteredRestruant)
                }}  className="bg-blue-100 border border-black px-2 text-xs rounded-md py-1">
                    Top rated restaurant
                </button>
            </div>
            <div className="card-container">
                
            {listofRestruant.map((restrant)=>{
                   return <Card key={restrant.info.id} resData={restrant}/>
                })}
                
            </div>

        </div>
    )
}
export default Body