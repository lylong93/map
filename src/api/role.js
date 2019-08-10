import http from './http'

export function roleApi() {
    return http({
        url:'/live/role',
        method:'get'
    })
}