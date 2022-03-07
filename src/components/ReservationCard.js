import React from 'react'

const ReservationCard = ({name}) => {
  console.log("name:", name)
  return (
    <div className="reservation-card-container">
      {name}
    </div>
  )
} 

export default ReservationCard