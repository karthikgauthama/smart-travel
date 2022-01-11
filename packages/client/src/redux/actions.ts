import type { City, CityUpdateType, ActionByTypeHelper, ActionHelper } from '../types'
import { CityActions } from '../types'

export const creators = {
  /**
   * Load Cities in the Store
   * @param cities
   * @returns
   */
  loadCities: (cities: City[]) =>
    ({
      type: CityActions.LOAD_CITIES,
      cities,
    } as const),

  /**
   * Fetch Cities from the API
   *
   */
  fetchCities: () =>
    ({
      type: CityActions.FETCH_CITY,
    } as const),

  /**
   * Updates City in the store as well as in the Server
   * @param cityId
   * @param updateType
   * @returns
   */
  updateCityDetail: (cityId: number, updateType: CityUpdateType) =>
    ({
      type: CityActions.UPDATE_CITY,
      updateType,
      cityId,
    } as const),
}

export type ActionByType = ActionByTypeHelper<typeof creators>
export type Action = ActionHelper<typeof creators>
