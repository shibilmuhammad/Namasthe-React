
import { useRouteError } from "react-router-dom"
export const Error = ()=>{
    const err = useRouteError;
    console.log(err);
    return(
        <div>
            <h1>Oops!!</h1>
            <h3>Something Went wrong</h3>
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    )
}
