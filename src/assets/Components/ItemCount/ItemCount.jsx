import React from 'react'
import {useState} from 'react'
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './ItemCount.css'
import { NavLink } from 'react-router-dom';
import Button1 from '../Buttons/Button1'

const ItemCount = ({stock, onAdd}) => {


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

  const sendQuantity = ()=> {
    onAdd(count)
  }

  
  return (
    <div className="input">
        <div className='inputNumberContainer'>
          <FaMinusSquare className="input__minus" onClick={restar} />
          <span className="input__number">{count}</span>
          <FaPlusSquare className="input__plus" onClick={sumar} />
        </div>
        <div className='btnContainer'>
          <Button1 onClick={()=> onAdd(count)}>Comprar</Button1>
        </div>
        
    </div>

  )
}

export default ItemCount