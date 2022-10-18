const CategoryMenu = (props) => {
  console.log('PROPS:', props.products)
  const categories = [...new Set(props.products.map(
    (product) => product.category
  ))]
  console.log('CATEGORIES:', categories)
  return (
    <select>
      {categories.map((category, idx) => (
        <option key={idx}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu