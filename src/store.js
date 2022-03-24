import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import selectedMokeMonsReducer from './selectedMokeMonsSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedMokeMons: selectedMokeMonsReducer,
    },
})