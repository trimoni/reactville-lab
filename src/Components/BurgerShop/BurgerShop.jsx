import { useState } from 'react'
import '../../styles/burger.css'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'
import { ingredients } from '../../data/burger-data'


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
        <IngredientList ingredients={ingredients} stack={stack} addToBurger={addToBurger}/>
        <BurgerStack ingredients={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </div>
  )
}

export default BurgerShop