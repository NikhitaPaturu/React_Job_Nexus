import React from 'react';
import PropTypes from 'prop-types';
import { LOGIN } from '../../routes/constants';

const higherOrderComponent = (WrappedComponent) => {
  class HOC extends React.Component {
      static propTypes = {
        login: PropTypes.shape({})
      }

      static defaultProps = {
          login: false
      }
    
    componentDidMount() {
        const { login: { authorized }, history } = this.props;
        if(!authorized) {
            history.replace(LOGIN);
            return;
        }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

export default higherOrderComponent;