import '../CartWidget/CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { LuBadge } from "react-icons/lu";

const CartWidget = () => {

  return (
    <div className='CartWidget'>

        <LuBadge className='shoppingBadge'/>
        <span className='itemsNumber'>14</span>
      <div className='cartContainer'>
      
        <FaShoppingCart className='shoppingCart' />    
      </div>    
        
    </div>
    
  )
}


export default CartWidget