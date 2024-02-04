import { cloudinaryLink } from "../utils/mockData";
const Card = (prop)=>{
    const {resData} = prop;
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData.info;
    return (
        <div className="Card rounded-lg">
            <img src={ cloudinaryLink+ cloudinaryImageId}/>
            <h2 className="font-semibold my-1">{name}</h2>
            <p className="text-sm  px-2  truncate flex justify-center items-center" style={{color:'#333333'}}>{cuisines.join(', ')}</p>
            <div className="text-xs " style={{color:'#333333'}}>
                <p className="text-sm " style={{margin:"10px"}}>{avgRating} Stars </p>
                <p> {sla.deliveryTime} Minutes</p>
            </div>
           
        </div>
    )
}
export default Card