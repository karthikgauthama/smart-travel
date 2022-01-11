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
    wishlist: true,
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
    wishlist: true,
  },
  {
    id: 24,
    name: 'Copenhagen',
    country: 'Denmark',
    visited: true,
    wishlist: true,
  },
]
// Intital WishList Cities = 3

describe('Visited Page', () => {
  beforeEach(() => {
    store.dispatch(creators.loadCities(cities))
    render(
      <Provider store={store}>
        <CityRendererComponent cityFilterBy="wishlist" header="WishList Page" />
      </Provider>
    )
  })

  it('Should display only 2 cities without Wishlist filter', () => {
    // Should expect 3 cities
    expect(screen.queryAllByTestId('city-box')).toHaveLength(3)
  })

  it('Should not Show Search bar', () => {
    const SearchComponent = screen.queryByText('search-bar')
    expect(SearchComponent).not.toBeInTheDocument()
  })

  it('Should Have Header WishList Page', () => {
    const HeadingComponent = screen.getByText('WishList Page')
    expect(HeadingComponent).toBeInTheDocument()
  })

  it('Should Disappear one city from the WishList after clicking on Wishlist ', () => {
    const WishlistButtons = screen.queryAllByText('Wishlist')
    fireEvent.click(WishlistButtons[0])
    // Should remove 1 city
    expect(screen.queryAllByTestId('city-box')).toHaveLength(2)
  })
})
