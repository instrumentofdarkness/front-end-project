import React from 'react'
import { Link } from 'react-router-dom'
import { favProducts } from '../types/type'

export default function NavBar({favProducts}) {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/fav-products">Fav Products ({favProducts.length})</Link>
    </div>
  )
}
