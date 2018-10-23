import React, { Component } from 'react';
import { Form, Button, Header, Divider, Message } from 'semantic-ui-react';
import { Page } from '../../components';
import './style.css';

class RegistrationPage extends Component {
  state={
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    address: '',
    country: '',
    userType: '',
  }

  handleRegister = () => {
    const { firstName, lastName, username, password, email, address, country, userType } = this.state;
    if(firstName && lastName && username && password && email && address && country && userType) {
      this.props.actions.doRegister({firstName, lastName, username, password, email, address, country, userType});
      this.setState({
          firstName: '',
          lastName: '',
          username: '',
          password: '',
          email: '',
          address: '',
          country: '',
          userType: '',
      })
    }
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { userType } = this.state;
    const { login: { authorized }, history, register: { error, errorMessage } } = this.props;
    return (
      <Page authorized={authorized} history={history}>
        <div className="form-container register">
        <Form>
            <Header as="h3">Registration</Header>
            <Divider />
            {error && <Message negative>{errorMessage}</Message> }
            <Form.Input required label='First Name:' placeholder='First name' name="firstName" onChange={this.handleInputChange} value={this.state.firstName} />
            <Form.Input required label='Last Name:' placeholder='Last name' name="lastName" onChange={this.handleInputChange} value={this.state.lastName} />
            <Form.Input required label='Username:' placeholder='User name' name="username" onChange={this.handleInputChange} value={this.state.username} />
            <Form.Input required label='Password:' type="password" name="password" placeholder='Password' onChange={this.handleInputChange} value={this.state.password} />
            <Form.Input required label='Email:' placeholder='Email' name="email" onChange={this.handleInputChange} value={this.state.email} />
            <Form.Input required label='Address:' placeholder='Address' name="address" onChange={this.handleInputChange} value={this.state.address} />
            <Form.Input required label='Country:' placeholder='Country' name="country" onChange={this.handleInputChange} value={this.state.country} />
            <Form.Group inline>
                <label>User Type</label>
                <Form.Radio label='Job Seeker' value='Job Seeker' name='userType' checked={userType === 'Job Seeker'} onChange={this.handleInputChange} />
                <Form.Radio label='Job Poster' value='Job Poster' name='userType' checked={userType === 'Job Poster'} onChange={this.handleInputChange} />
            </Form.Group>
            <Button type="button" fluid onClick={this.handleRegister}>Register</Button>
        </Form>
        </div>
      </Page>
    );
  }
}

export default RegistrationPage;