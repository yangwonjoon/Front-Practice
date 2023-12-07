import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './data/data.js'

let user = createSlice(({
    name: 'user',
    initialState: { name: 'yang', age: 25 },
}))

let cart = createSlice(({
    name: 'cart',
    initialState: data,
    reducers: {
        cartPlus(state, action) {
            console.log(state[0].title)
            console.log(action.payload)

            state[action.payload].count += 1
        },
        change(state) {
            state.sort((a, b) => a.title < b.title ? -1 : 1)
        },
        productPlus(state, action) {
            state.push(action.payload)
            console.log(state[3])
        }
    }
}))

export let { cartPlus, change, productPlus } = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})

