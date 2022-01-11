import { takeLatest, putResolve, call, throttle, select } from 'redux-saga/effects'
import type { ActionByType } from '../redux/actions'
import { creators } from '../redux/actions'
import { getCity } from '../redux/selectors'
import { serviceInstance } from '../Service'
import type { City, State } from '../types'
import { CityActions } from '../types'

/**
 * Fetches all cities from the API
 * @param action
 */
export function* fetchRemoteCities(_action: ActionByType['fetchCities']) {
  const cities: State = yield call(serviceInstance.getCities)
  yield putResolve(creators.loadCities(cities.cities))
}

/**
 * Update city Visited/Wishlisted through API
 * @param action
 */
export function* updateRemoteCity(action: ActionByType['updateCityDetail']) {
  const city: City = yield select(getCity(action.cityId))
  // Server is not updating with the selected values as this is test app
  // in Real app its better to update Store once server is updated
  // Or Update Store for real-time behavior and handle server response if fails.
  yield call(serviceInstance.updateCity, city)
}

/**
 * Initiates Saga
 */
export function* init() {
  yield takeLatest(CityActions.FETCH_CITY, fetchRemoteCities)
  yield throttle(100, CityActions.UPDATE_CITY, updateRemoteCity)
}
