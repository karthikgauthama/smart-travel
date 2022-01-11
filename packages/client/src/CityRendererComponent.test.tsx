import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import { render } from './test-utils'
import { CityRendererComponent } from './CityRendererComponent'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { creators } from './redux/actions'

const cities = [
  {
    id: 20,
    name: 'Belgrade',
    country: 'Serbia',
    visited: false,
    wishlist: false,
  },
  {
    id: 21,
    name: 'Munich',
    country: 'Germany',
    visited: false,
    wishlist: false,
  },
  {
    id: 22,
    name: 'Milan',
    country: 'Italy',
    visited: false,
    wishlist: false,
  },
  {
    id: 23,
    name: 'Prague',
    country: 'Czech Republic',
    visited: false,
    wishlist: false,
  },
  {
    id: 24,
    name: 'Copenhagen',
    country: 'Denmark',
    visited: false,
    wishlist: false,
  },
]

describe('Home Page', () => {
  beforeEach(() => {
    store.dispatch(creators.loadCities(cities))
    render(
      <Provider store={store}>
        <CityRendererComponent cityFilterBy="all" header="Smart Traveller" showSearch />
      </Provider>
    )
  })

  it('Should display al the given cities without filter', () => {
    expect(screen.queryAllByTestId('city-box')).toHaveLength(5)
  })

  it('Should Show Search bar', () => {
    const SearchComponent = screen.getByLabelText('search-bar')
    expect(SearchComponent).toBeInTheDocument()
  })

  it('Should Have Header Smart Traveller', () => {
    const HeadingComponent = screen.getByText('Smart Traveller')
    expect(HeadingComponent).toBeInTheDocument()
  })
  cleanup()
})
