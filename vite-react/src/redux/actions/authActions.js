export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST'
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS'
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE'

export const LOGOUT = 'LOGOUT'

export const UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST'
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS'
export const UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE'

export const UPDATE_EMAIL_REQUEST = 'UPDATE_EMAIL_REQUEST'
export const UPDATE_EMAIL_SUCCESS = 'UPDATE_EMAIL_SUCCESS'
export const UPDATE_EMAIL_FAILURE = 'UPDATE_EMAIL_FAILURE'

export const UPDATE_PASSWORD_REQUEST = 'UPDATE_PASSWORD_REQUEST'
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS'
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE'

export const UPDATE_NAME_REQUEST = 'UPDATE_NAME_REQUEST'
export const UPDATE_NAME_SUCCESS = 'UPDATE_NAME_SUCCESS'
export const UPDATE_NAME_FAILURE = 'UPDATE_NAME_FAILURE'

export const UPDATE_SURNAME_REQUEST = 'UPDATE_SURNAME_REQUEST'
export const UPDATE_SURNAME_SUCCESS = 'UPDATE_SURNAME_SUCCESS'
export const UPDATE_SURNAME_FAILURE = 'UPDATE_SURNAME_FAILURE'

export const UPDATE_USERNAME_REQUEST = 'UPDATE_USERNAME_REQUEST'
export const UPDATE_USERNAME_SUCCESS = 'UPDATE_USERNAME_SUCCESS'
export const UPDATE_USERNAME_FAILURE = 'UPDATE_USERNAME_FAILURE'

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'

export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

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
      dispatch({ type: LOGIN_SUCCESS, payload: data.accessToken })
    } else {
      dispatch({ type: LOGIN_FAILURE, error: data.message })
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message })
  }
}

export const fetchProfile = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_PROFILE_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: FETCH_PROFILE_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      dispatch({ type: FETCH_PROFILE_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: FETCH_PROFILE_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: FETCH_PROFILE_FAILURE, error: error.message })
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
}

export const uploadAvatar = (userId, file) => async (dispatch, getState) => {
  dispatch({ type: 'UPLOAD_AVATAR_REQUEST' })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: 'UPLOAD_AVATAR_FAILURE', error: 'No token available' })
    return
  }

  const formData = new FormData()
  formData.append('avatar', file)

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/avatar`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    if (response.ok) {
      const data = await response.json()
      dispatch({ type: 'UPLOAD_AVATAR_SUCCESS', payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: 'UPLOAD_AVATAR_FAILURE', error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: 'UPLOAD_AVATAR_FAILURE', error: error.message })
  }
}

export const updateEmail = (userId, email) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_EMAIL_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: UPDATE_EMAIL_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/email`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value: email.trim() }),
    })
    if (response.ok) {
      const data = await response.json()
      dispatch({ type: UPDATE_EMAIL_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: UPDATE_EMAIL_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: UPDATE_EMAIL_FAILURE, error: error.message })
  }
}

export const updateUsername = (userId, username) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USERNAME_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: UPDATE_USERNAME_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/username`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value: username.trim() }),
    })
    if (response.ok) {
      const data = await response.json()
      dispatch({ type: UPDATE_USERNAME_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: UPDATE_USERNAME_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: UPDATE_USERNAME_FAILURE, error: error.message })
  }
}

export const updateName = (userId, name) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_NAME_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: UPDATE_NAME_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/name`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value: name.trim() }),
    })
    if (response.ok) {
      const data = await response.json()
      dispatch({ type: UPDATE_NAME_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: UPDATE_NAME_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: UPDATE_NAME_FAILURE, error: error.message })
  }
}

export const updateSurname = (userId, surname) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_NAME_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: UPDATE_SURNAME_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/surname`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value: surname.trim() }),
    })
    if (response.ok) {
      const data = await response.json()
      dispatch({ type: UPDATE_SURNAME_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: UPDATE_SURNAME_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: UPDATE_SURNAME_FAILURE, error: error.message })
  }
}

export const updatePassword = (userId, password) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_PASSWORD_REQUEST })

  const {
    auth: { token },
  } = getState()

  if (!token) {
    dispatch({ type: UPDATE_PASSWORD_FAILURE, error: 'No token available' })
    return
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/${userId}/password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ value: password.trim() }),
    })
    if (response.ok) {
      const data = await response.json()
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data })
    } else {
      const errorData = await response.json()
      dispatch({ type: UPDATE_PASSWORD_FAILURE, error: errorData.message })
    }
  } catch (error) {
    dispatch({ type: UPDATE_PASSWORD_FAILURE, error: error.message })
  }
}

export const deleteAccount = () => async (dispatch, getState) => {
  const {
    auth: { token },
  } = getState()

  if (!token) {
    console.error('No token available')
    return { success: false }
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/users/me`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      dispatch({ type: DELETE_ACCOUNT })
      dispatch({ type: LOGOUT })
      return { success: true }
    } else {
      const errorData = await response.json()
      console.error('Error deleting account:', errorData)
      return { success: false }
    }
  } catch (error) {
    console.error('Error deleting account:', error)
    return { success: false }
  }
}
