import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { doLogin } from './action';
import { HOC } from '../../components';
import LoginPage from './../LoginPage';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: {
      doLogin: bindActionCreators(doLogin, dispatch),
    }
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HOC(LoginPage)));