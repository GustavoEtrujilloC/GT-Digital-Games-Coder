import React from 'react'
import {useState} from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './ItemCount.css'

const ItemCount = ({stock}) => {

  const onAdd = () => {
      if (count > 0 || stock === 0){
        alert("Puedes comprar")
        
      }
      else {
        alert('Debes seleccionar una cantidad')
      }
    
}
  const [count, setCount] = useState(1)
  
  const sumar = ()=> {
    if (count < stock){
      setCount(count+1)
      }
    }
  
  const restar = ()=> {
    if (count > 0)
    setCount(count-1)
  }

  
  return (
    <div className="input">
        <FaMinusSquare className="input__minus" onClick={restar} />
        <span className="input__number">{count}</span>
        <FaPlusSquare className="input__plus" onClick={sumar} />
        <div className='btnContainer'>
        <button className="details__button" onClick={onAdd}><span className='imgCart'><FaShoppingCart /></span>Comprar</button>
        

        </div>
        
    </div>

  )
}

export default ItemCount