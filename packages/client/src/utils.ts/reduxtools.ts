// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleWare from 'redux-saga';
// import { init } from '../sagas/saga';
// import { City, State, CityUpdateType, UpdateTypes, CityActions, ActionByTypeHelper, ActionHelper } from '../types';

// // export type CitiesAction =
// //   | {type: 'FETCH_CITY'}
// //   | { type: 'LOAD_CITIES'; cities: City[] }
// //   | { type: 'UPDATE_CITY'; updateType: 'VISITED' | 'WISHLIST'; cityId: number }

//   export const creators = {
//       /**
//        * Load Cities in the Store
//        * @param cities
//        * @returns
//        */
//     loadCities : (cities: City[]) => ({
//         type: CityActions.LOAD_CITIES,
//         cities,
//       } as const),

//       /**
//        * Fetch Cities from the API
//        *
//        */
//       fetchCities : () => ({
//         type: CityActions.FETCH_CITY,
//       } as const),

//       /**
//        * Updates City in the store as well as in the Server
//        * @param cityId
//        * @param updateType
//        * @returns
//        */
//       updateCityDetail : (cityId: number, updateType: CityUpdateType) => ({
//         type: CityActions.UPDATE_CITY,
//         updateType,
//         cityId,
//       } as const)
//   }

//   export type ActionByType = ActionByTypeHelper<typeof creators>;
//   export type Action = ActionHelper<typeof creators>;

// // export const loadCities = (cities: City[]): CitiesAction => ({
// //   type: 'LOAD_CITIES',
// //   cities,
// // })

// // export const fetchCities = (): CitiesAction => ({
// //     type: 'FETCH_CITY',
// //   })

// // export const updateCityDetail = (cityId: number, updateType: CityUpdateType): CitiesAction => ({
// //   type: 'UPDATE_CITY',
// //   updateType,
// //   cityId,
// // })

// export const initialState = {
//   cities: [],
// }

// export function CitiesReducer(state: State = initialState, action: Action) {
//   switch (action.type) {
//     case CityActions.LOAD_CITIES:
//       return {
//         ...state,
//         cities: [...action.cities],
//       }
//     case CityActions.UPDATE_CITY: {
//       const prop = action.updateType === UpdateTypes.VISITED ? 'visited' : 'wishlist'
//       const city = state.cities.find(city => city.id === action.cityId)
//       if (city) {
//         city[prop] = !city[prop]
//       }

//       return {...state};
//     }
//     default:
//       return state
//   }
// }

// const sagaMiddleware = createSagaMiddleWare()

// export const store = createStore(CitiesReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(init);
