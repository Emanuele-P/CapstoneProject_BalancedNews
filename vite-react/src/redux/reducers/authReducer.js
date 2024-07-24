import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/authActions'

const initialState = {
  loading: false,
  user: null,
  error: null,
  isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true }
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, isAuthenticated: true }
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error, isAuthenticated: false }
    default:
      return state
  }
}

export default authReducer
