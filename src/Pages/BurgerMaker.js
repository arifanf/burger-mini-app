import React from 'react'
import Burger from '../Components/Burger/Burger'
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

  // Render DOM
  return (
    <div className={style.burgermaker_container}>
      <div className={style.controller}>
        {/* Controller component dengan props state 'ingredients' & handler 'addIngredientsHandler', removeIngredientsHandler', 'moveDownIngredientsHandler', 'moveUpIngredientsHandler' */}
        <Controller />
      </div>
      <div className={style.burger_display}>
        {/* Burger component dengan props state 'ingredients' */}
        <Burger />
      </div>
    </div>
  )
}

export default BurgerMaker