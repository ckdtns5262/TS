import React from "react";
import { Address, Restaurant } from "./model/resturant";

interface StroeProps {
    info : Restaurant,
    changeAddress(address:Address) : void
}



const Store:React.FC<StroeProps> = ({info}) => {
    return ( 
        <div>{info.name}</div>
     );
}
 
export default Store;