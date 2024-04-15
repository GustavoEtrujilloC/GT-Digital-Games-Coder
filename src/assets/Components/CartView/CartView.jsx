import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'



const CartView = () => {
    const {cart, removeItem, totalBuy, clearCart} = useContext(CartContext)

  return (
    <div>
        <h1>Carrito</h1>
        <div>
            {cart.map((buy)=> {
                return (
                    <div key={buy.id}>
                        <img src={buy.image} alt={buy.name} />
                        <h2>Producto: {buy.name}</h2>
                        <h3>Cantidad: {buy.quantity}</h3>
                        <h3>Precio: {buy.price}</h3>
                        <h3>Precio Total: ${buy.price * buy.quantity}</h3>
                        <button onClick={()=>removeItem(buy.id)}>X</button>
                    </div>
                )
            })}
        </div>
        <p>Total a pagar: ${totalBuy()}</p>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to='/Checkout'>Finalizar Compra</Link>
        </div>
  )
}

export default CartView