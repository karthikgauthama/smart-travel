import type { City, CityFilterBy, State } from '../types'

export const citiesSelector =
  (filterBy: CityFilterBy) =>
  (state: State): City[] => {
    if (!filterBy || filterBy === 'all') {
      return [...state.cities]
    }
    return state.cities.filter(city => city[filterBy])
  }

export const getCity =
  (cityId: number) =>
  (state: State): City | undefined =>
    state.cities.find(city => city.id == cityId)
