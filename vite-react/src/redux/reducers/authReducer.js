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
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default authReducer
