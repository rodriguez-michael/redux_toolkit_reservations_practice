import { configureStore } from "@reduxjs/toolkit"
import reservationsReducer from "../features/reservationSlice"

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
  }
})

export default store

