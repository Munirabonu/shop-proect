import { useState } from "react";

export default function Basketitem(props) {
    const { id, name, price, quantity , increment, decrement} = props;
    

    return (
        <li className="collection-item blue lighten-5" style={{ borderTop: '1px solid #29b6f6 ' }}>
            {name}   <b>x</b>   {quantity} = {price * quantity} <b>$</b>

            <span className="secondary-content">
                <i className="material-icons small right"
                    onClick={props.handleBasketShop}
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.removeBasket(id)}>
                    delete</i>
            </span>
            <button className='basketInDc right' onClick={() => increment(id)}>+</button>
            <button className='basketInDc right' onClick={() => decrement(id)}>-</button>
        </li>
    )
}
