import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  LOGOUT,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
} from '../actions/authActions'

const initialState = {
  loading: false,
  user: null,
  profile: null,
  error: null,
  isAuthenticated: false,
  token: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case UPLOAD_AVATAR_REQUEST:
      return { ...state, loading: true }
    case FETCH_PROFILE_REQUEST:
      return { ...state, loading: true }
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
        isAuthenticated: true,
      }
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, profile: action.payload }
    case UPLOAD_AVATAR_SUCCESS:
      return { ...state, loading: false, profile: { ...state.profile, avatar: action.payload.avatar } }
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case FETCH_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.error, isAuthenticated: false }
    case UPLOAD_AVATAR_FAILURE:
      return { ...state, loading: false, error: action.error }
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        profile: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default authReducer
