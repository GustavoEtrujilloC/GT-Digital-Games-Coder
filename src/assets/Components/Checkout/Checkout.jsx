import { serverTimestamp,addDoc, collection, getDoc, updateDoc } from 'firebase/firestore'
import '../Checkout/Checkout.css'
import { useContext, useState } from 'react'
import { db } from '../../../Services/firebase'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import Button1 from '../Buttons/Button1'

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const {cart, totalBuy, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState ('')


    const userData = (e) => {
        setUser(
             {
            ...user,
            [e.target.name]: e.target.value
        }
    )}

    const checkout = (e) => {
        e.preventDefault()
        if (!user.name) {
            alert('Por favor, ingresa tu nombre');
        } else if (!user.lastname) {
            alert('Por favor, ingresa tu apellido');
        } else if (!user.email) {
            alert('Por favor, ingresa tu correo electrónico');
        } else if (!user.phone) {
            alert('Por favor, ingresa tu número de teléfono');
        } else if (user.email !== validateEmail) {
            alert('El correo electrónico no es válido');
        } else if (user.phone.length >= 10) {
            alert('El número de teléfono no debe tener mas de 10 dígitos');
        }else {
            let order = {
                user,
                item: cart,
                Total: totalBuy(),
                Date: serverTimestamp()

            }
            const sales = collection(db, 'orders')
            addDoc(sales, order)
            .then((res)=> {
                //act Stock
/*                 cart.foreach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbdoc)=> {
                        updateDoc(docRef, {stock: dbdoc.data().stock - item.quantity})
                    })
                })
 */                setOrderId(res.id)
                clearCart()
            })
            .catch((error)=> console.log(error))
        }

    }

  return (
    
    <div>
        {orderId !== '' 
        
        ? 

        <div className='thanksContainer'>
            <h4>{user.name}, gracias por confiar en GT Digital Games</h4>
            <h5>Tu numero de pedido es el {orderId}, pronto enviaremos un correo con todos los datos de tu compra.</h5>
            <Link to='/'><Button1>Volver a Inicio</Button1></Link>
        </div>
        :
        <div className='checkoutContainer'>
            <form className="form" onSubmit={checkout}>
                <p className="title">Finalizar Compra</p>
                <p className="message">Completa tus datos</p>
                    <div className="flex">
                    <label>
                        <input name = 'name'  placeholder="Nombre" type="text" className="input" onChange={userData} />
                    </label>

                    <label>
                        <input name = 'lastname'  placeholder="Apellido" type="text" className="input" onChange={userData} />
                    </label>
                </div>  

                <label>
                    <input name = 'email'  placeholder="Email" type="email" className="input" onChange={userData}/>
                </label> 

                <label>
                    <input name = 'second-email'  placeholder="Ingresa de nuevo tu email" type="email" className="input" onChange={(e)=> setValidateEmail(e.target.value)} />
                </label> 


                <label>
                    <input  name = 'phone'  placeholder="Telefono" type="text" className="input" onChange={userData} />
                </label>
                <button type='submit' className="submit">Enviar</button>
            </form>
        </div>}
    </div>
    
  )
}

export default Checkout