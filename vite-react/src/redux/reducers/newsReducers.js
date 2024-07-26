import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../actions/newsActions'

const initialState = {
  loading: false,
  news: [],
  error: null,
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state, loading: true }
    case GET_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload }
    case GET_NEWS_FAILURE:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default newsReducer
