import { CookieEnum } from '@/enum'
import Cookies from 'js-cookie'

export const Cookie = {
  set: setToken,
  get: getToken,
  remove: removeToken,
}

function setToken(name: CookieEnum, token: string) {
  Cookies.set(name, token)
}

function getToken(name: CookieEnum) {
  return Cookies.get(name)
}
function removeToken(name: CookieEnum) {
  return Cookies.remove(name)
}
