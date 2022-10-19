import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
console.log(products)
const SuperMarket = (props) => {

  const [cart, setCart] = useState([])

  const [productCatergory, setProductCategory] = useState('Produce')
  console.log(productCatergory)

  console.log('Imported product data:::', products)

  const addToCart = (item) => {
    setCart([{ ...item, quantity: 1 }, ...cart])
    console.log('addToCart works!', item)
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      setCart(cart.map((prod) => prod.id === item.id
        ? { ...item, quantity: item.quantity - 1 }
        : prod
      ))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategory={productCatergory} addToCart={addToCart}/>
      </section>

      <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} handleExchange={props.handleExchange}/>

    </div>
  )
}

export default SuperMarket