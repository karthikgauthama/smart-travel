import type { ActionCreatorsMapObject } from 'redux'

export interface City {
  id: number
  wishlist: boolean
  visited: boolean
  name: string
  country: string
}

export interface State {
  cities: City[]
}

export const UpdateTypes = {
  VISITED: 'VISITED',
  WISHLIST: 'WISHLIST',
}

export type CityUpdateType = keyof typeof UpdateTypes

export const generateActionTypes = <T extends Record<string, unknown>>(actionTypeMap: T) =>
  (Object.keys(actionTypeMap) as (keyof T)[]).reduce((acc, key) => ({ ...acc, [key]: actionTypeMap[key] }), {}) as T

export const CityActions = generateActionTypes({
  LOAD_CITIES: 'LOAD_CITIES',
  UPDATE_CITY: 'UPDATE_CITY',
  FETCH_CITY: 'FETCH_CITY',
} as const)

export type CityFilterBy = 'all' | 'visited' | 'wishlist'

export type ActionByTypeHelper<T extends ActionCreatorsMapObject> = { [K in keyof T]: ReturnType<T[K]> }
export type ActionHelper<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>
