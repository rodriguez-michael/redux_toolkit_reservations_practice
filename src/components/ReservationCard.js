import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../app/features/reservationSlice'
import { addCustomer } from '../app/features/customerSlice'
import { v4 as uuid } from 'uuid'

const ReservationCard = ({name, index}) => {

  const dispatch = useDispatch()

  const removeRes = () => {
    dispatch(removeReservation(index))
  }

  const moveResToTable = () => {
    dispatch(addCustomer({
      id: uuid(),
      name,
      food: []
    }))
    
    dispatch(removeReservation(index))
  }

  return (
    <>
      <div className="reservation-card-container">
        {name}
        <button onClick={moveResToTable} className="reservation-accept">
          <span>&#10003;</span>
        </button>
        <button onClick={removeRes} className="reservation-cancel">
          X
        </button>
      </div>
    </>
  )
} 

export default ReservationCard