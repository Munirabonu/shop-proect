import GoodItem from "./GoodItem";
import { useContext } from "react";
import { ShopContext } from "../context";
export default function GoodList() {
    const {goods =[]}= useContext(ShopContext);

    if(!goods.lenght){
        <h3>Noting here</h3>
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodItem 
                key={item.id} 
                {...item}
                />
            ))}
        </div>
    )
}
