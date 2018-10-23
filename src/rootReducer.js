import { combineReducers } from 'redux';
import login from './containers/LoginPage/reducer';
import account from './containers/AccountPage/reducer';
import register from './containers/RegistrationPage/reducer';
export default combineReducers({
 login,
 account,
 register
});