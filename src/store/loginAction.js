import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAIL,
    LOGOUT_USER,
} from "./loginConstant";
import axios from 'axios'

const baseUrl = 'https://askpoise.herokuapp.com'


export const login = (email, password) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({ type: LOGIN_USER_REQUEST });

        const { data } = await axios.post(`${baseUrl}/api/v1/users/login`, { email, password }, config);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: data,
        });
        localStorage.setItem('userData', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userData')
    dispatch({ type: LOGOUT_USER })
}