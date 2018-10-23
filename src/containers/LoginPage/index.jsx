import React, { Component } from 'react';
import { Form, Button, Header, Divider, Message } from 'semantic-ui-react';
import { Page } from '../../components';
import './style.css';

class LoginPage extends Component {
  state={
    username: '',
    password: ''
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.login.authorized && this.props.login.authorized) {
      this.props.history.push('/account');
    }
  }

  handleLogin = () => {
    const { username, password } = this.state;
    if(username && password) {
      this.props.actions.doLogin({username, password});
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    const { login: { authorized, error, errorMessage }, history } = this.props;
    return (
      <Page authorized={authorized} history={history}>
        <div className="form-container">
        <Form>
            <Header as="h3">User Login</Header>
            <Divider />
            {authorized === false && <Message positive>Logout Successful</Message> }
            {error && <Message negative>{errorMessage}</Message> }
            <Form.Input required label='Username:' placeholder='User name' name="username" onChange={this.handleInputChange} value={this.state.username} />
            <Form.Input required label='Password:' type="password" name="password" placeholder='Password' onChange={this.handleInputChange} value={this.state.password} />
            <Button type="button" fluid onClick={this.handleLogin}>Login</Button>
          </Form>
        </div>
      </Page>
    );
  }
}

export default LoginPage;