import * as httpRequest from '../utils/httpRequest'

export const getSeason = async () => {
    try {
        const res = await httpRequest.get('seasons')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};