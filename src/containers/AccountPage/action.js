import { createAction } from 'redux-actions';
import axios from 'axios';

export const showAccounts = createAction('SHOW_ACCOUNTS');
export const getJobsSuccess = createAction('GET_JOBS_SUCCESS');
export const getJobsFailure = createAction('GET_JOBS_FAILURE');

export const getJobs = () => dispatch => {
    axios.get('http://localhost:8080/user/jobs')
        .then(res => {
            return dispatch(getJobsSuccess(res.data));
        })
        .catch(e => {
            return dispatch(getJobsFailure(e));
        })
}