export default function Cart(props) {
    const {quantity =0, handleBasketShop=Function.prototype} = props;
    return (
        <div className='cart blue darken-1 white-text p-1' onClick={handleBasketShop}>
            <i className="material-icons ">add_shopping_cart</i>
            {quantity ? <span className='cart-residue'>{quantity}</span> : null}
        </div>
    )
}