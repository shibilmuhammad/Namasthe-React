import { createContext } from "react";

const UserContext = createContext({
    username:'Default User'
})
console.log(UserContext);
export default UserContext