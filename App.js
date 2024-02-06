import React from "react";
import ReactDOM from "react-dom/client";

import AboutUs from "./src/components/AboutUs";
import Header from "./src/components/header";
import Body  from "./src/components/Body";
import ContactUs from "./src/components/ContactUs.js";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {Error} from "./src/components/Error";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
           <Outlet/>
        </div>
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
