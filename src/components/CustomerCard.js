import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCustomerFood, removeCustomer } from '../app/features/customerSlice'

const CustomerCard = ({customer, id, name, food, index}) => {

  const dispatch = useDispatch()
  
  const [customerFoodInput, setCustomerFoodInput] = useState("")

  const handleCustomerAddFood = () => {
    if(!customerFoodInput) return
    dispatch(addCustomerFood({id, food: customerFoodInput}))
    console.log(food)
    console.group(customerFoodInput)
    setCustomerFoodInput("")
    
  }

  const handleCustomerLeaving = () => {
    dispatch(removeCustomer(index))
  }

  return (
    <>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((food, index) => {
              return <p key={index}>{food}</p>
            })}
          </div>
          <div className="customer-food-input-container">
            <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)}/>
            <button onClick={handleCustomerAddFood} className="customer-done-button">Add</button>
            <button onClick={handleCustomerLeaving} className="customer-done">
            Done
            </button>
          </div>
        </div>
        
      </div>

    </>
  )
} 

export default CustomerCard