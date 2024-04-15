import '../CartWidget/CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { LuBadge } from "react-icons/lu";
import { CartContext } from '../../../context/CartContext';
import { useContext } from "react"

const CartWidget = ({counter}) => {
  const {cartQuantity} = useContext(CartContext)

  return (
    <div className='CartWidget'>

        {cartQuantity() > 0 && <LuBadge className='shoppingBadge'/>}
        <span className='itemsNumber'>{cartQuantity()}</span>
      <div className='cartContainer'>
      
        <FaShoppingCart className='shoppingCart' />    
      </div>    
        
    </div>
    
  )
}


export default CartWidget