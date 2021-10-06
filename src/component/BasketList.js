import Basketitem from "./Basketitem";

export default function BasketList(props) {
    const { order, removeBasket, handleBasketShop, increment, decrement } = props;
    const total_price = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <div className="bsk">


            <ul className="collection basket-list">
                <i className="material-icons small right" onClick={handleBasketShop} style={{ color: "white", cursor: 'pointer' }}>cancel</i>
                <li className="collection-item active">
                    Basket
                </li>
                {order.length ? order.map(item => {
                    return (
                        <Basketitem
                            key={item.id}
                            {...item}
                            removeBasket={removeBasket}
                            increment={increment}
                            decrement={decrement}
                        />
                    )
                }) : <li className="collection-item">Basket is empty</li>}
                <li className="collection-item active">
                    Total Price: {total_price} <b>$</b>
                </li>
            </ul>
        </div>
    )
}
