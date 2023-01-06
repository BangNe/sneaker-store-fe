import * as httpRequest from '../utils/httpRequest'

export const getBrand = async () => {
    try {
        const res = await httpRequest.get('brands')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};