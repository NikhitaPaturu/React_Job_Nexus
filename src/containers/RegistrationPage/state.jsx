import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doRegister } from './action';
import { withRouter } from 'react-router';
import { HOC } from '../../components';
import RegistrationPage from './../RegistrationPage';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: {
        doRegister: bindActionCreators(doRegister, dispatch),
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegistrationPage));