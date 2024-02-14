import { cloudinaryLink } from "../utils/mockData";
const Card = (prop)=>{
    const {countryData} = prop;
    const {name ,flags ,capital ,area,unMember} = countryData;
    console.log("country data = ",);
    return (
        
        <div className="Card rounded-lg">
            <img src={flags.png}/>
            <h2 className="font-semibold my-1">{name.common}</h2>
            <p className="text-sm  px-2  truncate flex justify-center items-center  text-red-600" >{capital}</p>
            <div className="text-xs " style={{color:'#333333'}}>
                <p className="text-sm " style={{margin:"10px"}}>{""} {area} </p>
                <p> {""} KM</p>
            </div>
           
        </div>
    )
}

export const WithUnLabel = (Card)=>{
    
    return (props)=>{
        return (
            <div>
                <p className="p-[6px] m-2 font-semibold absolute bg-black text-white rounded-lg text-xs">UN MEMBER</p>
                <Card {...props}/>
            </div>
        )
    }
}
export default Card
