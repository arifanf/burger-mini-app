import React from 'react'

import AddButton from './AddButton'
import style from './controller.module.css'

const Controller = (props) => {
  return (
    <>
        <div className={style.ingredient_selector}>
            <h5>Add Ingredients</h5>
            <div>
                <AddButton label="Patty" clickHandler={() => props.addIngredientsHandler('patty')} />
                <AddButton label="Lettuce" clickHandler={() => props.addIngredientsHandler('lettuce')} />
                <AddButton label="Tomato" clickHandler={() => props.addIngredientsHandler('tomato')} />
                <AddButton label="Cheese" clickHandler={() => props.addIngredientsHandler('cheese')} />
                <AddButton label="Bun" clickHandler={() => props.addIngredientsHandler('bun')} />
            </div>
        </div>
        <div className={style.ingredients_map}>
            {props.ingredients.map( (item, index) => {
                return (
                    <div key={index}>{item}</div>
                )
            } )}
        </div>
    </>
  )
}

export default Controller