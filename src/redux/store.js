import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/AuthSlice.js'

export default configureStore({
    reducer: {
        auth: authReducer,
    }
})