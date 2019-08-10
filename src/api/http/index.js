import axios from 'axios'
import config from '@/config'
import {cookset} from '@/utils/auth'

const http = axios.create({
    baseURL: config.baseUrl
})

http.interceptors.request.use(config => {
    config.headers['Token'] = cookset()
    return config
})

http.interceptors.response.use(response => {
    return response.data
})

export default http
