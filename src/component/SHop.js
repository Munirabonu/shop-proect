import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { API_KEY, API_URL } from '../config';
import BasketList from "./BasketList";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loading from "./Loading";
export default function SHop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [basketShop, setBasketShop] = useState(false)

    const increment = (quantityID) => {
        const newOrder = order.map(el => {
            if (el.id === quantityID) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity:newQuantity
                }
            }else{
                return el
            }
        })
        setOrder(newOrder)
    }

    const decrement = (quantityID) => {
        const newOrder = order.map(el => {
            if (el.id === quantityID) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity:newQuantity >=0 ? newQuantity :0
                }
            }else{
                return el
            }
        })
        setOrder(newOrder)
    }

    const handleBasketShop = () => {
        setBasketShop(!basketShop)
    }

    const removeBasket = (itemID) => {
        const newOby = order.filter(item => item.id !== itemID)
        setOrder(newOby)
        toast.error('Goods delete   to basket successfully !')       
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            },
        }).then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    function onToggleBuy(item) {
        const itemIdex = order.findIndex((orderItem) => orderItem.id === item.id)
        if (itemIdex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIdex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }
                else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
toast.success('Goods added to basket successfully !')
}
    return (
        <div className="container content">
            <Cart quantity={order.length} handleBasketShop={handleBasketShop} />
            {loading ? <Loading /> : <GoodList goods={goods} onToggleBuy={onToggleBuy} />}
            {basketShop && <BasketList increment={increment} decrement={decrement} removeBasket={removeBasket} order={order} handleBasketShop={handleBasketShop} />}
            {/* <button onClick={removeBasket}>m</button> */}
        </div>
    )
}
