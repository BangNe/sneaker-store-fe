import * as httpRequest from '../utils/httpRequest'

export const getBanner = async () => {
    try {
        const res = await httpRequest.get('banners')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};