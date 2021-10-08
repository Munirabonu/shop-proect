import {  useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from '../config';
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loading from "./Loading";
export default function SHop() {
    const {goods,setGoods,loading,order,basketShop } =useContext(ShopContext)
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            },
        }).then((response) => response.json())
            .then((data) => {
                 setGoods(data.featured);
            });
    }, []);

    return (
        <div className="container content">
            <Cart quantity={order.length}  />
            {loading ? <Loading /> : <GoodList  />}
            {basketShop && <BasketList  />}
            
        </div>
    )
}
