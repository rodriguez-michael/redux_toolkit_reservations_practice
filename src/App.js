import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import customerSlice from "./app/features/customerSlice";
import { addReservation } from "./app/features/reservationSlice";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";

const App = () => {

  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservations = useSelector((state) => state.reservations.value)

  const customer = useSelector((state) => state.customer.value)

  const dispatch = useDispatch()

  const handleAddReservations = (e) => {
    //if state is empty just return falsey
    if(!reservationNameInput) return

    //use dispatch to call my slice function (action) and pass it a state
    dispatch(addReservation(reservationNameInput))

    //clear state
    setReservationNameInput("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} key={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
           {customer.map((customer, index) => {
             return <CustomerCard customer={customer} id={customer.id} name={customer.name} food={customer.food} index={index} key={index}/>
           })}
        </div>
      </div>
    </div>
  );
}

export default App;