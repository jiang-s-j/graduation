import { createStore,applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import Sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhacers(applyMiddleware(sagaMiddleware),applyMiddleware(sagaMiddleware))

const store = createStore(reducer,enhancer)

sagaMiddleware.run(Sagas)

export default store