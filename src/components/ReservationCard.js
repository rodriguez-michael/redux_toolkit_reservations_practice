import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../app/features/reservationSlice'

const ReservationCard = ({name, index}) => {

  const dispatch = useDispatch()

  const handleCardClick = () => {
    dispatch(removeReservation(index))
  }

  return (
    <div onClick={handleCardClick} className="reservation-card-container">
      {name}
    </div>
  )
} 

export default ReservationCard