import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import Button1 from '../Buttons/Button1'
import ButtonX from '../Buttons/ButtonX'
import '../CartView/CartView.css'



const CartView = () => {
    const {cart, removeItem, totalBuy, clearCart} = useContext(CartContext)

  return (
    <div className='container' >
        <h1>Carrito</h1>
            <div >
                {cart.map((buy)=> {
                    return (
                        <div className='cartDetails' key={buy.id}>
                            <img src={buy.image} alt={buy.name} />
                            <h2>Producto: {buy.name}</h2>
                            <h3>Cantidad: {buy.quantity}</h3>
                            <h3>Precio: {buy.price}</h3>
                            <h3>Precio Total: ${buy.price * buy.quantity}</h3>
                            <ButtonX onClick={()=>removeItem(buy.id)}></ButtonX>
                        </div>
                    )
                })}
            </div>
            <div className='cartTotal'>
                <p>Total a pagar: ${totalBuy()}</p>
                <Button1 onClick={clearCart}>Vaciar Carrito</Button1>
                <Link to='/Checkout'><Button1>Finalizar Compra</Button1></Link>
            </div>
    </div>

  )
}

export default CartView