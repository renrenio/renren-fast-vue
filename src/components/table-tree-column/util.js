const indexOf = (val, arr) => {
  var has = -1
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      has = i
      break
    }
  }
  return has
}

const descendantsIds = (id, data, parentKey, treeKey) => {
  var result = []
  var compare = [id]
  var length = -1
  while (length !== compare.length) {
    length = compare.length
    data.forEach(function (item) {
      if (indexOf(item[parentKey], compare) > -1 && indexOf(item[treeKey], compare) === -1) {
        result.push(item[treeKey])
        compare.push(item[treeKey])
      }
    })
  }
  return result
}
const hash = () => Math.floor(Math.random() * Math.random() * Math.random() * Math.random() * 1000)
const index = (hash, data) => {
  var i = 0
  while (data[i]) {
    if (data[i].$extra && data[i].$extra.hash === hash) {
      break
    }
    i++
  }
  return i
}

export default {
  indexOf,
  descendantsIds,
  hash,
  index
}
