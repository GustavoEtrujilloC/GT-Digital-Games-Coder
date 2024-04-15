import '../CartWidget/CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../../context/CartContext';
import { useContext } from "react"
import { FaCircle } from "react-icons/fa";

const CartWidget = ({counter}) => {
  const {cartQuantity} = useContext(CartContext)

  return (
    <div className='CartWidget'>
      <div className='badgeContainer'>
        {cartQuantity() > 0 && <FaCircle className='shoppingBadge'/>}
        {cartQuantity() > 0 && <span className='itemsNumber'>{cartQuantity()}</span>}
      </div>
        <FaShoppingCart className='shoppingCart' />  
    
        
    </div>
    
  )
}


export default CartWidget