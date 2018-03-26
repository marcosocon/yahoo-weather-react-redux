import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dashboard from './index'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
configure({ adapter: new Adapter() })

describe('Dashboard test  passing the store  directly', () => {
  const initialState = {
    weather: [],
    weatherErrors: []
  }
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Dashboard store={store} />)
  })

  it('Render the connected component', () => {
    expect(container.length).toEqual(1)
  })

  it('Check if Prop weather matches with initialState', () => {
    expect(container.prop('weather')).toEqual(initialState.weather)
  })

  it('Check Prop weatherErrors matches with initialState', () => {
    expect(container.prop('weather')).toEqual(initialState.weather)
  })
})

describe('Dashboard,  Shallow Render REACT COMPONENTS', () => {
  let wrapper, store
  const initialState = {
    weather: [],
    weatherErrors: []
  }
  const mockStore = configureStore()
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Dashboard store={store} />)
  })

  it('Must render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  })
})

describe('Mount and wrapping in <Provider>)', () => {
  const initialState = {
    weather: [],
    weatherErrors: []
  }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Provider store={store} ><Dashboard /></Provider>)
  })

  it('Render the connected component', () => {
    expect(wrapper.find(Dashboard).length).toEqual(1)
  })
})
