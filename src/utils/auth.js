import Cookie from 'js-cookie'
const Token = 'app-token'

export function cookset(token) {
    return Cookie.set(Token,token)
}
export function cookget(token) {
    return Cookie.get(Token,token)
}
export function cookdel() {
    return Cookie.remove(Token)
}