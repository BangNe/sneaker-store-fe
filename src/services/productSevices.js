import * as httpRequest from '../utils/httpRequest'

export const getTest = async () => {
    try {
        const res = await httpRequest.get('products')
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const searchProduct = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('products/search', {
            params: {
                q,
                type
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getType = async (brand = 'converse') => {
    try {
        const res = await httpRequest.get('products/get-type', {
            params: {
                brand
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getSize = async (brand = 'converse') => {
    try {
        const res = await httpRequest.get('products/get-size', {
            params: {
                brand
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getRangePrice = async (brand = 'converse') => {
    try {
        const res = await httpRequest.get('products/get-price', {
            params: {
                brand
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}