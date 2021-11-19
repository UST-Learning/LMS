import React, {Component} from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";
class ListuserForm extends Component {
  initialState = {
    fullname: '',
    loginid: '',
    
  }

  state = this.initialState
  handleChange = (event) => {
    const {fullname, value} = event.target
  
    this.setState({
      [fullname]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { fullname, loginid } = this.state;
  
    return (
      <Form inverted style={{ width: "470px" }}>
        <header>
        <h1>List User</h1>
        </header>
        <Divider /><br />
        <Form.Field>
        <label>Login id </label>
        <input type="text" name="loginid" id="loginid" placeholder="Login id" value={loginid} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" name="fullname" id="fullname" placeholder="Full name" value={fullname}onChange={this.handleChange} />
        </Form.Field>
        <Divider /><br />
        <Button onClick={this.submitForm} primary basic inverted color='grey'>Search User</Button>
        <Button onClick={this.submitForm} primary basic inverted color='black'>Cancel</Button>
        </Form>
    );
  }
  
}
export default ListuserForm;