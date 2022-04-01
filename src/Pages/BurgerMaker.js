import React, { useState } from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

  // Menginisiasi state 'ingredients' & setter 'setIngredients'
  const [ingredients, setIngredients] = useState([])

  // Handler untuk menambahkan ingredient
  const addIngredientsHandler = (ingredient) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama dan menambahkan ingredient baru pada index 0
      const newState = [ingredient,...prevState]
      // Me-return data baru untuk state 'ingredients'
      return newState

    })
  }
  
  // Handler untuk mengurangi ingredient
  const removeIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menghapus ingredient pada state 'ingredients' berdasarkan indexnya
      newState.splice(index, 1)
      // Me-return data baru untuk state 'ingredients'
      return newState

    })
  }

  // Handler untuk menggeser ingredient ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredient yang akan digeser ke atas dan disimpan di variable 'temp'
      const temp = newState[index - 1]
      // Meng-assign ingredient yang akan digeser ke index sebelum index saat ini
      newState[index - 1] = newState[index]
      // Meng-assign variable 'temp' ke index saat ini
      newState[index] = temp
      // Me-return data baru untuk state 'ingredients'
      return newState

    })
  }

  // Handler untuk menggeser ingredient ke bawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index setelah index ingredient yang akan digeser ke bawah dan disimpan di variable 'temp'
      const temp = newState[index + 1]
      // Meng-assign ingredient yang akan digeser ke index setelah index saat ini
      newState[index + 1] = newState[index]
      // Meng-assign variable 'temp' ke index saat ini
      newState[index] = temp
      // Me-return data baru untuk state 'ingredients'
      return newState

    })
  }

  // Render DOM
  return (
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
        {/* Controller component dengan props state 'ingredients' & handler 'addIngredientsHandler', removeIngredientsHandler', 'moveDownIngredientsHandler', 'moveUpIngredientsHandler' */}
        <Controller ingredients={ingredients} addIngredientsHandler={addIngredientsHandler} removeIngredientsHandler={removeIngredientsHandler} moveDownIngredientsHandler={moveDownIngredientsHandler} moveUpIngredientsHandler={moveUpIngredientsHandler} />
      </div>
      <div className={style.burger_display}>
        {/* Burger component dengan props state 'ingredients' */}
        <Burger ingredients={ingredients} />
      </div>
    </div>
  )
}

export default BurgerMaker