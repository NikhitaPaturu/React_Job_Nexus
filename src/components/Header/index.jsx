import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './style.css';

export default class Header extends Component {
  state = { activeItem: 'home' }

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  static propTypes = {
      authorized: PropTypes.bool,
  }

  static defaultProps = {
    authorized: false,
  }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      if (name === 'logout') {
          this.props.logoutHandler(false);
          this.props.history.push('/login');
      } else if (name === 'register') {
          this.props.history.push('/register');
      }
      else if (name === 'login') {
        this.props.history.push('/login');
    }
  }


  render() {
    const { activeItem } = this.state
    const { authorized } = this.props

    return (
        <div className="app-header"> 
            <p className="app-title">Nexus</p>
            <span>odd jobs platform</span>  
            <Menu inverted>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                name='contact'
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
                />
                { !authorized && <Menu.Menu position="right">
                        <Menu.Item
                        icon="user"
                        name='register'
                        active={activeItem === 'register'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        icon="sign-in alternate"
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                }

                { authorized && <Menu.Menu position="right">
                        <Menu.Item
                        name='my account'
                        active={activeItem === 'my account'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        icon="sign-out alternate"
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                }
            </Menu>
        </div>
    )
  }
}