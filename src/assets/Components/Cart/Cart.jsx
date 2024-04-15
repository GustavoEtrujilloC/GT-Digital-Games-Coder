import React, {useContext} from 'react'
import CartView from '../CartView/CartView'
import { CartContext } from '../../../context/CartContext'

export const cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div>
      {!cart.length ? <p> El carrito esta vacio.</p> : <CartView />}
    </div>
  )
}



export default cart