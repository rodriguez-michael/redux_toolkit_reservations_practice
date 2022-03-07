import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: []
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload)
    },
    removeReservation: (state, action) => {
      //actionpayload is index in state, remove 1 element
      state.value.splice(action.payload, 1)
    },
  }
})

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer