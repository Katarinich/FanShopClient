import { syncAuth } from '../auth'

const versionKey = "version"
const authKey = "auth"

const descriptors = [
  {
    stateKey: "auth",
    storageKey: authKey,
    syncActionCreator: syncAuth
  }
]

export function loadInitialState() {
  const savedAuth = load(authKey)

  const auth = savedAuth || {}

  var initialState = {
    auth: auth
  }

  log('Initial state from persistance:', initialState)

  return initialState
}

export const persistChanges = store => next => action => {
  var prevState = store.getState()

  var result = next(action)

  var nextState = store.getState()

  flushStateChanges(prevState, nextState)

  return result
}

export function bindStoreToStorageUpdates(store) {
  window.addEventListener('storage', handleStorageUpdate(store))
}

function flushStateChanges(prevState = {}, nextState = {}) {
  log('State to be saved to local storage:', nextState)
  log('prevState:', prevState)

  descriptors.forEach(descriptor => {
    const { stateKey, storageKey } = descriptor

    const prevStateValue = prevState[stateKey]
    const serializedPrevStateValue = serialize(prevStateValue)

    const nextStateValue = nextState[stateKey]
    const serializedNextStateValue = serialize(nextStateValue)

    if (serializedNextStateValue !== serializedPrevStateValue) {
      log(`${stateKey} changed in redux state and will be saved to local storage as ${storageKey}`)
      saveRaw(storageKey, serializedNextStateValue)
    }
  })
}

function handleStorageUpdate(store) {
  return storageEvent => {
    log(`event storage: ${storageEvent.key}`, storageEvent)

    descriptors.forEach(descriptor => {
      const { storageKey, syncActionCreator } = descriptor

      log(`checking ${storageKey}...`)

      const updated = syncIfStorageEntryChanged(storageKey, storageEvent, store, syncActionCreator)

      log(`${storageKey} was ${updated ? '' : "NOT"} updated`)
    })
  }
}

function syncIfStorageEntryChanged(key, storageEvent, store, syncActionCreator) {
  if (!dataChanged(key, storageEvent))
  {
    return false
  }

  var savedData = load(key)
  store.dispatch(syncActionCreator(savedData))

  return true
}

function dataChanged(key, storageEvent) {
  if (storageEvent.key !== key) {
    return false
  }

  return storageEvent.oldValue !== storageEvent.newValue
}

function serialize(value) {
  return JSON.stringify(value)
}

function deserialize(serializedValue) {
  return JSON.parse(serializedValue)
}

function save(key, value) {
  var serializedValue = serialize(value)
  saveRaw(key, serializedValue)
}

function saveRaw(key, value) {
  localStorage.setItem(key, value)
}

function load(key) {
  var serializedValue = loadRaw(key)
  return deserialize(serializedValue)
}

function loadRaw(key) {
  return localStorage.getItem(key)
}

function log() {
  console.log(...arguments)
}
