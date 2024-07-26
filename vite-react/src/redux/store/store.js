import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import newsReducer from '../reducers/newsReducers'

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store
