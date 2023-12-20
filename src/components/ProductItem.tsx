import React from 'react'

export default function ProductItem({products, setFavProducts, favProducts}) {

    function handleFavClick() {setFavProducts([...favProducts, products])}
  return (
    <div>
        <h3>{products.name}</h3>
        <h4>{products.price}</h4>
        <button onClick={handleFavClick}>Add to favourites</button>
        <img src={products.image} alt={products.name} />
        
    </div>
  )
}
