
const store = {
  getAll: (storeName, cb) => {
    try {
      cb(JSON.parse(window.localStorage[storeName]))
    } catch (e) {
      cb([])
    }
  },
  add: (storeName, item, cb) => {
    store.getAll(storeName, (items) => {
      items.push(item)
      window.localStorage[storeName] = JSON.stringify(items)
      cb()
    })
  },
  replace: (storeName, {data, index}, cb) => {
    store.getAll(storeName, (items) => {
      items[index] = {...items[index], ...data};
      window.localStorage[storeName] = JSON.stringify(items)
      cb({ index, todo: items[index] });
    })
  }
}

export default store;
