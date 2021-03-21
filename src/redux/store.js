import { configureStore } from '@reduxjs/toolkit'
import userReducer from './state/User'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
