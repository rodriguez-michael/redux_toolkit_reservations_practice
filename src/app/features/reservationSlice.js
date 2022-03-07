import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: []
}

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {}
})

export default reservationsSlice.reducer