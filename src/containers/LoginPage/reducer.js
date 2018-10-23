import initialState from './../../store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { authorized: true, userData: action.payload }
    case 'LOGIN_FAILURE':
      return { ...state, authorized: null, error: true, errorMessage: action.payload }
    case 'DO_LOGOUT':
      return { ...state, authorized: false }
    default:
      return state
  }
}