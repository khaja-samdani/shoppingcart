

const ProductListActions = (products) => {
    return {
        type: "SET_PRODUCT",
        payload: products
    }
}
export const CartList = (newProduct) => {
    console.log(newProduct, 'newpro')
    return {
        type: "CART_PRODUCT",
        payload: newProduct
    }
}
export default ProductListActions