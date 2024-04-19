import React, {useContext , useState} from 'react'
import CartView from '../CartView/CartView'
import { CartContext } from '../../../context/CartContext'
import '../Cart/Cart.css'
import { TbShoppingBagX } from "react-icons/tb";
import Button1 from '../Buttons/Button1';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart} = useContext(CartContext)

  return (
    <div>
        {!cart.length ? 
        <div className='emptyCartContainer'>
          <p className='emptyCart'> El carrito esta vacio <TbShoppingBagX fontSize={40} /> </p>
          <Link to='/store'><Button1>Ir a la tienda</Button1></Link> 
        </div>      
  
        : <CartView />}
        
    </div>
 


    
  )
}



export default Cart