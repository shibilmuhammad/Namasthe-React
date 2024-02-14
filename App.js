import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import AboutUs from "./src/components/AboutUs";
import Header from "./src/components/Header";
import Body  from "./src/components/Body";
import ContactUs from "./src/components/ContactUs.js";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {Error} from "./src/components/Error";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./src/utils/UserContext";

const AppLayout = () =>{
    const [userName ,setUserName ] = useState()

    useEffect(()=>{
        const data = {
            name:'Shibil'
        }
       setUserName(data.name)
    },[])
    return (
        <UserContext.Provider value={{username:userName}}> 
        <div className="app">
            <Header />
           <Outlet/>
        </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/About',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantMenu />
            }
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
