import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../src/Services/firebase'
import { productos } from '../src/mock/fakeApi'

const AddGames = () => {
    const collectionGames = collection(db, 'products')

    const addGamesClick = () => {
        
        productos.map((item)=> addDoc(collectionGames, item))
    } 
        

  return (
    <button onClick={addGamesClick}>AddGames</button>
  )
}

export default AddGames