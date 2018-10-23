import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components';

export default class Toggle extends React.PureComponent {
    state = {
        showLabel : true
    }

    static propTypes = {
        title: PropTypes.string
    }

    static defaultProps = {
        title: ''
    }

    toggleLabel = () => {
        this.setState({ showLabel: !this.state.showLabel });
    }

    render() {
        const { title, ...obj } = this.props;

        return (
        <div>
            { title && <Header title={title} {...obj}/>}
            <button onClick={this.toggleLabel} {...obj} >Click Me! </button>
            {this.state.showLabel && <p>Hello World</p> }
        </div>
        )
    }
};