let store = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage
  }
}

const API = {
  set (key, val) {
    if (this.disabled) {
      return
    }
    if (val === 'undefined') {
      return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
    return val
  },
  get (key, def) {
    if (this.desabled) {
      return def
    }
    if (!this.storage.getItem(key)) {
      return def
    }
    return this.storage.getItem(key)
  },
  remove (key) {
    if (this.disabled) {
      return
    }
    this.storage.removeItem(key)
  }
}

function serialize (val) {
  return JSON.stringify(val)
}

Object.assign(store, API)
Object.assign(store.session, API)

export default store
