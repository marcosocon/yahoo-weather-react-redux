import axios from 'axios'
export const FETCH_WEATHER_LOCATION = 'FETCH_WEATHER_LOCATION'
export const SET_WEATHER_ERROR = 'SET_WEATHER_ERROR'
const API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where '

export const fetchWeather = (location) => {
  return async (dispatch) => {
    try {
      const fetchLocation = API_URL + `text="${location}")&format=json`
      const request = await axios.get(fetchLocation)
      dispatch({
        type: FETCH_WEATHER_LOCATION,
        payload: request.data.query.results.channel
      })
    } catch (err) {
      dispatch({
        type: SET_WEATHER_ERROR,
        err
      })
    }
  }
}
