import * as httpRequest from '../utils/httpRequest'

export const creatUser = async (data) => {
    try {
        const res = await httpRequest.post('users/create',data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const logInUser = async (data) => {
    try {
        const res = await httpRequest.post('users/log-in',data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}