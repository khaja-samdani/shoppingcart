
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartList from "../../../Redux/actions/Actions"
import './Cart.css'
const Cart = () => {
    const { cartpro } = useSelector((state) => state.production)
    const dispatch = useDispatch()
    //console.log(cartpro, 'cartpage')
    const ProductItem = (id) => {

        const removecartproduct = cartpro.findIndex((item) => item.id === id)
        console.log("removecartproduct", removecartproduct);
        cartpro.splice(removecartproduct, 1);
        console.log("cartpro", cartpro)
        dispatch(CartList(cartpro));
        window.location.reload();
    }

    return (
        <div className='products-wrapper'>
            {cartpro?.map((item) => {
                const { id, category, price, image } = item
                return (
                    <div key={id} className='products'>
                        <div>
                            <img src={image} className='image' />
                        </div>
                        <div className='product_info'>
                            <h3>{category}</h3>
                            <p>{price}</p>
                        </div>
                        <button onClick={() => ProductItem(id)}>Remove from cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart