import Ingredient from './Ingredient'

const IngredientList = (props) => {
	return (
		<ul>
			{props.ingredients.map((ingredient, idx) =>
				<Ingredient
					key={idx}
					isList={true}
					ingredient={ingredient}
					addToBurger={props.addToBurger}
				/>
			)}
		</ul>
	)
}

export default IngredientList