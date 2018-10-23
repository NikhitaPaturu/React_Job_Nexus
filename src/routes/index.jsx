import LoginPage from './../containers/LoginPage/state';
import { LOGIN, ACCOUNT, JOB_DETAIL, REGISTER } from './constants';
import AccountPage from '../containers/AccountPage/state';
import JobDetailPage from '../containers/JobDetailPage/state';
import RegistrationPage from '../containers/RegistrationPage/state';

export default [
  {
    exact: true,
    path: LOGIN,
    component: LoginPage,
  },

  {
    exact: true,
    path: REGISTER,
    component: RegistrationPage,
  },

  {
    exact: true,
    path: ACCOUNT,
    component: AccountPage,
  },

  {
    exact: true,
    path: JOB_DETAIL,
    component: JobDetailPage,
  },

  {
    path: '*',
    component: LoginPage,
  },
];
