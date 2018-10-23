import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { getJobs } from './action';
import { doLogout } from '../LoginPage/action'
import { HOC } from '../../components';
import AccountPage from './../AccountPage';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: {
      getJobs: bindActionCreators(getJobs, dispatch),
      doLogout: bindActionCreators(doLogout, dispatch),
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HOC(AccountPage)));