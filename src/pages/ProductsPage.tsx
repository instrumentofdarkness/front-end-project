import React from 'react'
import UserInput from '../components/UserInput'
import ProductList from '../components/ProductList'
import { Product } from '../types/type'

type ProductsPageProp = { products : Product [],
  setFavProducts : React.Dispatch<React.SetStateAction<Product[]>>,
  favProducts : Product [],
  setUserInput : React.Dispatch<React.SetStateAction<string>>, 
}

export default function ProductsPage({
    products,
    setFavProducts,
    favProducts,
    setUserInput,
    
} : ProductsPageProp) {
  return (
    <div>
        <UserInput setUserInput={setUserInput} />   
        <ProductList
            products={products}
            setFavProducts={setFavProducts}
            favProducts={favProducts}
            
        />
    </div>
  )
}
