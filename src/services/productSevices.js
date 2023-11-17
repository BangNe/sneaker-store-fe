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

export const getProductdetails = async (data) => {
    try {
        const res = await httpRequest.get('products/get-product-details', {
            params: {
                data
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getMenuProduct = async (data) => {
    try {
        const res = await httpRequest.get('products/menu-product', {
            params: {
                data
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getType = async (data) => {
    try {
        const res = await httpRequest.get('products/get-type', {
            params: {
                data
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getSize = async (data) => {
    try {
        const res = await httpRequest.get('products/get-size', {
            params: {
                data
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getRangePrice = async (data) => {
    try {
        const res = await httpRequest.get('products/get-price', {
            params: {
                data
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}