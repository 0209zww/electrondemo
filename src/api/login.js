import request from '../utils/request'
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}
export function captcha() {
  return request({
    url: '/captcha',
    method: 'get',

  })
}
export function signin(data) {
  return request({
    url: '/signin',
    method: 'post',
    data
  })
}
export function info(data) {
  return request({
    url: '/info',
    method: 'post',
    data
  })
}
export function setportrait(data) {
  return request({
    url: '/set/portrait',
    method: 'post',
    data
  })
}