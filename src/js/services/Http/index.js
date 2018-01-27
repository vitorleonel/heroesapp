import axios from 'axios'
import configApp from '@config'

axios.defaults.baseURL = configApp.api.baseUrl

axios.interceptors.request.use(config => {
    config.url = config.url + '?apikey=' + configApp.api.apiKey

    return config
})

export default axios