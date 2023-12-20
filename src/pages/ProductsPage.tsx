import React from 'react'
import UserInput from '../components/UserInput'
import ProductList from '../components/ProductList'

export default function ProductsPage({
    products,
    setFavProducts,
    favProducts,
    setUserInput
}) {
  return (
    <div>
        <UserInput setUserInput={setUserInput} />   
        <ProductList
            products={products}
            setFavProducts={setFavProducts}
            favProducts={favProducts}
            userInput={userInput}
        />
    </div>
  )
}
