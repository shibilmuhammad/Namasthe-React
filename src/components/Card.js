import { cloudinaryLink } from "../utils/mockData";
const Card = (prop)=>{
    const {countryData} = prop;
    const {name ,flags ,capital ,area} = countryData;
    return (
        <div className="Card rounded-lg">
            <img src={flags.png}/>
            <h2 className="font-semibold my-1">{name.common}</h2>
            <p className="text-sm  px-2  truncate flex justify-center items-center" style={{color:'#333333'}}>{capital}</p>
            <div className="text-xs " style={{color:'#333333'}}>
                <p className="text-sm " style={{margin:"10px"}}>{""} {area} </p>
                <p> {""} KM</p>
            </div>
           
        </div>
    )
}
export default Card