import React, { Component } from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";

class EdituserForm extends Component {
  inhistory = () => {
    const { history } = this.props;
    if (history) history.push('/');
  }
  initialState = {
    email: '',
    password: '',
    login_id: '',
    fname: '',
    address: '',
  }

  state = this.initialState
  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { email, password, login_id, fname, address } = this.state;

    return (
      <Form inverted style={{ width: "470px" }}>
        <header><h1>Edit User</h1></header>
        <Divider /><br />
        <Form.Field required>
          <label>Login id</label>
          <input id="login" type="text" name="login" placeholder="login id" required="" capture value={login_id}
            onChange={this.handleChange} />
        </Form.Field>
        <Form.Field required>
          <label>Email </label>
          <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input type="password" name="password" id="password" placeholder="password" value={password} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Full Name</label>
          <input type="text" name="fname" id="fname" placeholder="Full Name" value={fname} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.TextArea label='Address' placeholder='Please write your address...' value={address} onChange={this.handleChange} />
        </Form.Field>
        <Divider /><br />
        <Button onClick={this.submitForm}>Update account</Button>
        <Button onClick={this.inhistory}>Cancel</Button>

      </Form>
    );
  }

}

export default EdituserForm;