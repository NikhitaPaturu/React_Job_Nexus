import initialState from './../../store/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return { registered: true }
    case 'REGISTRATION_FAILURE':
      return { ...state, error: true, errorMessage: action.payload }
    default:
      return state
  }
}