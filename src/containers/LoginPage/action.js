import { createAction } from 'redux-actions';
import axios from 'axios';

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');
export const doLogout = createAction('DO_LOGOUT');

export const doLogin = (loginObj) => dispatch => {
    axios.post('http://localhost:8080/user/login', loginObj)
    .then(res => {
        const { error, data, message } = res.data;
        if(error) {
            return dispatch(loginFailure(message)); 
        }
        return dispatch(loginSuccess(data));
        }
    )
    .catch(e => {
        return dispatch(loginFailure(e));
    })
}