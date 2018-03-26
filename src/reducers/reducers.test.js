import reducer from './fetchWeather'
import * as types from '../actions/fetchWeather'

describe('Test to get wheater reducers', () => {
  it('should return the initial state', () => {
    expect(reducer({weather: [], weatherErrors: []}, {}))
      .toEqual({weather: [], weatherErrors: []})
  })

  it('Should handle errors', () => {
    expect(reducer([], {type: types.SET_WEATHER_ERROR, err: null}))
      .toEqual({weatherErrors: undefined})
  })

  it('Test reducer , check return a expected both state attrs', () => {
    let state = {
      weather: [],
      weatherErrors: []
    }
    state = reducer(state, {type: types.FETCH_WEATHER_LOCATION, weather: []})
    expect(state).toEqual({weather: [undefined], weatherErrors: []})
  })

  it('Test reducer , check return a expected weather state ', () => {
    expect(reducer({weather: []}, {type: types.FETCH_WEATHER_LOCATION}))
      .toEqual({weather: [undefined]})
  })

  it('Test reducer , check return a expected weather and wheater error state', () => {
    expect(reducer({weather: []}, {type: types.SET_WEATHER_ERROR}))
      .toEqual({weather: [], weatherErrors: undefined})
  })
})
