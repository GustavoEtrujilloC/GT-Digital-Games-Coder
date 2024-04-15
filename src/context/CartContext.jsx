import { createContext, useState } from "react";

export const CartContext = createContext ()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {

        if(isInCart(item.id)){
            const newCart = cart.map((buy)=>{
                if(buy.id === item.id){
                    return {...buy, quantity: buy.quantity + quantity}
                }else{
                    return buy
                }
            })
            setCart(newCart)

        }else {
            
            setCart([...cart, {...item, quantity}]);       
        }

    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((buy) => buy.id !== itemId))
    }

    const isInCart = (itemId) => {
        return cart.some((buy)=> buy.id === itemId)

    }
    // cartWigget count
    const cartQuantity = () => {
        return cart.reduce((acc, buy)=> acc += buy.quantity, 0)
    }

    // Total buy

    const totalBuy = () => {
        return cart.reduce((acc, buy)=> acc += (buy.price * buy.quantity), 0)
    }

    return (

        <CartContext.Provider value = {{cart, addItem, clearCart, removeItem, isInCart, cartQuantity, totalBuy}}>
            {children}

        </CartContext.Provider>


    )

}
