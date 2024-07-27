export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE'

export const getNews = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_REQUEST })
  try {
    const response = await fetch(`${import.meta.env.VITE_URL}/api/news/top`)
    const data = await response.json()
    console.log('API response:', data)
    if (response.ok) {
      dispatch({ type: GET_NEWS_SUCCESS, payload: data })
    } else {
      console.log('Error fetching news:', data.message)
      throw new Error('Error fetching news, try again later!')
    }
  } catch (error) {
    console.error('API error:', error)
    dispatch({ type: GET_NEWS_FAILURE })
  }
}
