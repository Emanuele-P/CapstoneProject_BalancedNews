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
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_FAILURE,
  UPDATE_SURNAME_REQUEST,
  UPDATE_SURNAME_SUCCESS,
  UPDATE_SURNAME_FAILURE,
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
  DELETE_ACCOUNT,
  CLEAR_ERRORS,
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
    case FETCH_PROFILE_REQUEST:
    case UPLOAD_AVATAR_REQUEST:
    case UPDATE_EMAIL_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case UPDATE_NAME_REQUEST:
    case UPDATE_SURNAME_REQUEST:
    case UPDATE_USERNAME_REQUEST:
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
    case UPDATE_EMAIL_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_NAME_SUCCESS:
    case UPDATE_SURNAME_SUCCESS:
    case UPDATE_USERNAME_SUCCESS:
      return { ...state, loading: false, profile: { ...state.profile, ...action.payload } }
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case FETCH_PROFILE_FAILURE:
    case UPLOAD_AVATAR_FAILURE:
    case UPDATE_EMAIL_FAILURE:
    case UPDATE_PASSWORD_FAILURE:
    case UPDATE_NAME_FAILURE:
    case UPDATE_SURNAME_FAILURE:
    case UPDATE_USERNAME_FAILURE:
      return { ...state, loading: false, error: action.error, isAuthenticated: false }
    case DELETE_ACCOUNT:
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        profile: null,
        isAuthenticated: false,
      }
    case CLEAR_ERRORS:
      return { ...state, error: null }
    default:
      return state
  }
}

export default authReducer
