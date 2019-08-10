import http from './http'

export function loginApi(){
    return http({
        url:'/live/login',
        method:'get'
    })
}

export function infoApi() {
    return http({
        url:'/live/info',
        method:'get'
    })
}