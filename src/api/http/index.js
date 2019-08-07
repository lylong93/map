import axios from 'axios'
import {cookset} from '@/utils/auth'

const http = axios

http.interceptors.request.use(config => {
    config.headers['Token'] = cookset()
    return config
})

http.interceptors.response.use(response => {
    // config.headers['Token'] = cookset()
    return response.data
})


export default http
