import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { doLogout } from '../LoginPage/action'
import { HOC } from '../../components';
import JobDetailPage from './../JobDetailPage';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: {
      doLogout: bindActionCreators(doLogout, dispatch),
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HOC(JobDetailPage)));