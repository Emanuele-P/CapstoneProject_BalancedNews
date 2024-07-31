import {
  GET_TOP_NEWS_REQUEST,
  GET_TOP_NEWS_SUCCESS,
  GET_TOP_NEWS_FAILURE,
  GET_TRENDING_NEWS_REQUEST,
  GET_TRENDING_NEWS_SUCCESS,
  GET_TRENDING_NEWS_FAILURE,
} from '../actions/newsActions'

const initialState = {
  loading: false,
  news: [],
  trendingNews: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_NEWS_REQUEST:
    case GET_TRENDING_NEWS_REQUEST:
      return { ...state, loading: true }
    case GET_TOP_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload }
    case GET_TRENDING_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        trendingNews: { ...state.trendingNews, [action.payload.query]: action.payload.data },
      }
    case GET_TOP_NEWS_FAILURE:
    case GET_TRENDING_NEWS_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default newsReducer
