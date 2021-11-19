import React, { Component } from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";

class Forms extends Component {
  inhistory = () => {
    const { history } = this.props;
    if (history) history.push('/searchbook');

  }
  onhistory = () => {
    const { history } = this.props;
    if (history) history.push('/adduser');

  }

  initialState = {
    name: '',
    password: '',
    usertype: ''
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
    const { name, password, usertype } = this.state;
    const { history } = this.props;

    return (

      <div>
        <Form inverted style={{ width: "470px" }}>

          <header><h1>Login</h1></header>
          <Divider /><br />
          <Form.Field required>
            <label>User Type</label>

            <select value={usertype}>
              usertype
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </Form.Field>
          <Form.Field required>
            <label>User Name </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange} />
          </Form.Field>
          <Divider />
          <Button onClick={this.inhistory} primary basic inverted color='grey'>Login</Button>
          <Button onClick={this.inhistory} primary basic inverted color='black'>Guest</Button>
          <Button onClick={this.onhistory}primary basic inverted color='black'>Create Account</Button>
        </Form>

      </div>

    );
  }

}

export default Forms;

