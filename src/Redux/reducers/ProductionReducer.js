
import React from 'react'

const initialState = {
    products: [],
    cartpro: []
};

console.log("initialState", initialState)
const ProductionReducer = (state = initialState, { type, payload }) => {
    if (type === 'SET_PRODUCT') {
        return {
            ...state,
            products: payload
        }
    }
    if (type === "CART_PRODUCT") {
        console.log(state.cartpro, 'cartpro')
        return {
            ...state,
            cartpro: payload
        }
    }
    else return state
}

export default ProductionReducer