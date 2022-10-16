import { useState } from 'react'
import '../../styles/burger.css'
import { ingredients } from '../../data/burger-data'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

const BurgerShop = () => {
  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient])
  }

  const removeFromBurger = (idx) => {
    setStack(stack.filter((ing, i) => i !== idx))
  }

  console.log(ingredients)
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList />
        <BurgerStack />
      </section>
    </div>
  )
}

export default BurgerShop