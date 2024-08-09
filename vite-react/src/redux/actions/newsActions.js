export const GET_TOP_NEWS_REQUEST = 'GET_TOP_NEWS_REQUEST'
export const GET_TOP_NEWS_SUCCESS = 'GET_TOP_NEWS_SUCCESS'
export const GET_TOP_NEWS_FAILURE = 'GET_TOP_NEWS_FAILURE'
export const GET_TRENDING_NEWS_REQUEST = 'GET_TRENDING_NEWS_REQUEST'
export const GET_TRENDING_NEWS_SUCCESS = 'GET_TRENDING_NEWS_SUCCESS'
export const GET_TRENDING_NEWS_FAILURE = 'GET_TRENDING_NEWS_FAILURE'

export const GET_NEWS_SOURCE_REQUEST = 'GET_NEWS_SOURCE_REQUEST'
export const GET_NEWS_SOURCE_SUCCESS = 'GET_NEWS_SOURCE_SUCCESS'
export const GET_NEWS_SOURCE_FAILURE = 'GET_NEWS_SOURCE_FAILURE'

export const SET_VALID_NEWS = 'SET_VALID_NEWS'

export const setValidNews = (validNews) => ({
  type: SET_VALID_NEWS,
  payload: validNews,
})

export const getTopNews = () => async (dispatch) => {
  dispatch({ type: GET_TOP_NEWS_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/news/top`)
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: GET_TOP_NEWS_SUCCESS, payload: data })
    } else {
      console.log('Error fetching top news:', data.message)
      throw new Error('Error fetching top news, try again later!')
    }
  } catch (error) {
    console.error('API error:', error)
    dispatch({ type: GET_TOP_NEWS_FAILURE })
  }
}

export const getTrendingNews = (query) => async (dispatch) => {
  dispatch({ type: GET_TRENDING_NEWS_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/news/trending?query=${query}`)
    const data = await response.json()

    if (response.ok) {
      dispatch({ type: GET_TRENDING_NEWS_SUCCESS, payload: { data, query } })
    } else {
      console.log('Error fetching trending news:', data.message)
      throw new Error('Error fetching trending news, try again later!')
    }
  } catch (error) {
    console.error('API error:', error)
    dispatch({ type: GET_TRENDING_NEWS_FAILURE })
  }
}

export const getNewsSource = (domain) => async (dispatch) => {
  dispatch({ type: GET_NEWS_SOURCE_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/news/source/domain/${domain}`)
    const data = await response.json()
    if (response.ok) {
      dispatch({ type: GET_NEWS_SOURCE_SUCCESS, payload: { domain, data } })
    } else {
      // console.log('Error fetching news source:', data.message)
      throw new Error('Error fetching news source, try again later!')
    }
  } catch (error) {
    // console.error('API error:', error)
    dispatch({ type: GET_NEWS_SOURCE_FAILURE })
  }
}
