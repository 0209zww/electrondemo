
function setLocal (key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}
// 取数据
function getLocal (key) {
  return JSON.parse(window.sessionStorage.getItem(key))
}
// 删数据
function delLocal (key) {
  window.sessionStorage.removeItem(key)
}
// 全部清空
function clearLocal () {
  window.sessionStorage.clear()
}

export { setLocal, getLocal, delLocal, clearLocal }
