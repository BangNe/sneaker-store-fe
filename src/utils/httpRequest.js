import axios from 'axios'

const httpRequest = axios.create({
    baseURL: 'http://localhost:8081/api/',
})

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options)
    return response.data
}

export const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options)
    return response.data
}

export default httpRequest;