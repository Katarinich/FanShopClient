import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'
import { loadInitialState, persistChanges, bindStoreToStorageUpdates } from '../modules/persistence'

export default function configureStore() {
  const logger = createLogger()
  const initialState = loadInitialState()

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      persistChanges, thunkMiddleware, logger )
    )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  bindStoreToStorageUpdates(store)

  return store
}
