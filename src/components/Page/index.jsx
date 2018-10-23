import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './style.css';
import { Header } from '../../components';

export default class Page extends React.PureComponent {

    static propTypes = {
        authorized: PropTypes.bool,
        children: PropTypes.node,
        logoutHandler: PropTypes.func,
        history: PropTypes.shape({}).isRequired,
    }

    static defaultProps = {
        authorized: false,
        children: {},
        logoutHandler: noop
    }

    render() {
        const { authorized, children, logoutHandler, history } = this.props;

        return (
            <div className='app-container'>
                <Header authorized={authorized} logoutHandler={logoutHandler} history={history}></Header>
                {children}
            </div>
        )
    }
};