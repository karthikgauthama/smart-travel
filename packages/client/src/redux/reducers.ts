import type { State } from '../types'
import { UpdateTypes, CityActions } from '../types'
import type { Action } from './actions'

export const initialState = {
  cities: [],
}

export function CitiesReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case CityActions.LOAD_CITIES:
      return {
        ...state,
        cities: [...action.cities],
      }
    case CityActions.UPDATE_CITY: {
      const prop = action.updateType === UpdateTypes.VISITED ? 'visited' : 'wishlist'
      const city = state.cities.find(city => city.id === action.cityId)
      if (city) {
        city[prop] = !city[prop]
      }

      return { ...state }
    }
    default:
      return state
  }
}
