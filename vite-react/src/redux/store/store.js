import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer'
import newsReducer from '../reducers/newsReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import themeReducer from '../reducers/themeReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  theme: themeReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_PERSIST_KEY,
    }),
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)
