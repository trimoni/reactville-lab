const CategoryMenu = (props) => {
  console.log('PROPS:', props.products)
  const categories = [...new Set(props.products.map(
    (product) => product.category
  ))]
  console.log('CATEGORIES:', categories)
  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)}>
      {categories.map((category, idx) => (
        <option key={idx} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu