import { useState } from "react";
const Header = () =>{
    const [loginButton,setloginButton] = useState("Login");
    return (
        <div className="Header-Container">
            <div className="Logo">
                <img  src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"></img>
            </div>
            <div className="Nav-items">
                <ul className="flex items-center justify-center">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{loginButton==='Login'?setloginButton('LogOut'):setloginButton('Login')}} className="bg-blue-100 border border-black  whitespace-nowrap px-2  py-0 mx-2 h-fit flex justify-center items-center rounded-sm">{loginButton}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header