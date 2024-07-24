export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: REGISTER_SUCCESS, payload: data })
    } else {
      dispatch({ type: REGISTER_FAILURE, error: data.message })
    }
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: error.message })
  }
}

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: LOGIN_SUCCESS, payload: data })
    } else {
      dispatch({ type: LOGIN_FAILURE, error: data.message })
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message })
  }
}
