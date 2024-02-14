

import { useState,useEffect } from "react"

useOnlineStaus = ()=>{
    const [onlineStatus,setOnlineStaus] = useState(true);
    useEffect(()=>{
       
       window.addEventListener('offline',()=>{
        setOnlineStaus(false)
       })
        window.addEventListener('online',()=>{
            setOnlineStaus(true)
    })
   
    },[])
    return onlineStatus 
    
}
export default useOnlineStaus;