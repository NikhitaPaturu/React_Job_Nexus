import { createAction } from 'redux-actions';
import axios from 'axios';

export const registrationSuccess = createAction('REGISTRATION_SUCCESS');
export const registrationFailure = createAction('REGISTRATION_FAILURE');

export const doRegister = (registerObj) => dispatch => {
    axios.post('http://localhost:8080/user/register', registerObj)
    .then(res => {
        const { error, data, message } = res.data;
        if(error) {
            return dispatch(registrationFailure(message)); 
        }
        return dispatch(registrationSuccess(data));
        }
    )
    .catch(e => {
        return dispatch(registrationFailure(e));
    })
}