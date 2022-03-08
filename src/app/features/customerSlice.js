import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: []
}

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload)
    },
    removeCustomer: (state, action) => {
      //actionpayload is index in state, remove 1 element
      state.value.splice(action.payload, 1)
    },
    addCustomerFood: (state, action) => {
      state.value.forEach((customer => {
        if(customer.id === action.payload.id){
          customer.food.push(action.payload.food)
        }
      }))
    },
  }
})

export const { addCustomer, removeCustomer, addCustomerFood } = customerSlice.actions

export default customerSlice.reducer