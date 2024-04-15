import React, {useContext} from 'react'
import CartView from '../CartView/CartView'
import { CartContext } from '../../../context/CartContext'
import '../Cart/Cart.css'
import { TbShoppingBagX } from "react-icons/tb";


export const cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='cartContainer'>
      {!cart.length ? <p className='EmptyCart'> El carrito esta vacio <TbShoppingBagX fontSize={40} /></p> : <CartView />}
    </div>
  )
}



export default cart