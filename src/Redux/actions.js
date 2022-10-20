import axios from 'axios'

export const GET_API_INFO = 'GET_API_INFO';


const getApiInfo = () => {
    return async function (dispatch) {
        try {
            let info = await axios.get('http.www.google.com')
            return dispatch({
                type: GET_API_INFO,
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default getApiInfo;
