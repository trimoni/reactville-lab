import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
console.log(products)
const SuperMarket = () => {

  const [cart, setCart] = useState([])

  const [productCatergory, setProductCategory] = useState('Produce')

  console.log('Imported product data:::', products)
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products}/>
        <DisplayProducts />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket