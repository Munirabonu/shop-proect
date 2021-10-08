import { useContext } from "react";
import { ShopContext } from "../context";
export default function Cart(props) {
    const {order, handleBasketShop=Function.prototype} = useContext(ShopContext);
    const quantity=order.length
    return (
        <div className='cart blue darken-1 white-text p-1' onClick={handleBasketShop}>
            <i className="material-icons ">add_shopping_cart</i>
            {quantity ? <span className='cart-residue'>{quantity}</span> : null}
        </div>
    )
}