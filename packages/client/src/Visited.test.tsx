import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
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
    visited: true,
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
    visited: true,
    wishlist: false,
  },
]

// Initial Visited Cities = 3

describe('Visited Page', () => {
  beforeEach(() => {
    store.dispatch(creators.loadCities(cities))
    render(
      <Provider store={store}>
        <CityRendererComponent cityFilterBy="visited" header="Visited Page" />
      </Provider>
    )
  })

  it('Should display only 2 cities without Visited filter', () => {
    // Should match initial visited city
    expect(screen.queryAllByTestId('city-box')).toHaveLength(2)
  })

  it('Should not Show Search bar', () => {
    const SearchComponent = screen.queryByText('search-bar')
    expect(SearchComponent).not.toBeInTheDocument()
  })

  it('Should Have Header Smart Traveller', () => {
    const HeadingComponent = screen.getByText('Visited Page')
    expect(HeadingComponent).toBeInTheDocument()
  })

  it('Should Disappear one city from the WishList after clicking on Visited ', () => {
    const VisitedButton = screen.queryAllByText('Visited')
    fireEvent.click(VisitedButton[0])
    // Should remove one city after clicking on Visited again
    expect(screen.queryAllByTestId('city-box')).toHaveLength(1)
  })
})
