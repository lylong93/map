import http from './http'

export function login(){
    return http({
        url:'https://easy-mock.com/mock/5d4992e192e35c235be33042/live/role',
        method:'get'
    })
}