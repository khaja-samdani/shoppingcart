
import { useSelector, useDispatch } from 'react-redux'
import { CartList } from '../../../Redux/actions/Actions'
const ProductListing = () => {
  const { products } = useSelector((state) => state.production);
  const { cartpro } = useSelector((state) => state.production);
  const dispatch = useDispatch()
  const ProductItem = (id) => {
    const newProduct = products.filter((item) => item.id === id)
    const allCartedProducts = [...cartpro, ...newProduct]
    //console.log(newProduct)
    dispatch(CartList(allCartedProducts))
  }

  return (
    <>
      <div className='products-wrapper'>
        {products?.map((item) => {
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
              <button onClick={() => ProductItem(id)}>Add to cart</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductListing