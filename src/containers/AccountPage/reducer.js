import initialState from './../../store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ACCOUNTS':
      return { showAccounts: action.payload }
    case 'GET_JOBS_SUCCESS':
      return { jobData: action.payload }
    case 'GET_JOBS_FAILURE':
      return { error: action.payload }
    default:
      return state
  }
}