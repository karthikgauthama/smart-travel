import type { Store } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { init } from '../sagas/saga'
import { CitiesReducer } from './reducers'

const sagaMiddleware = createSagaMiddleWare()

export const store: Store = createStore(CitiesReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(init)
