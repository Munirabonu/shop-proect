import { useContext } from "react";
import { ShopContext } from "../context";

export default function GoodItem(props) {

    const { id, name, description, full_background, price } = props;

    const {onToggleBuy} = useContext(ShopContext)

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button onClick={() => onToggleBuy({ id, name, price })} className='btn p-2'>Buy</button>
                <span className="right">{price}$</span>
            </div>
        </div>
    )
}
