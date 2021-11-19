import React, {Component} from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";
class BooktransactionForm extends Component {
  initialState = {
    title: '',
    username:''
  }

  state = this.initialState
  handleChange = (event) => {
    const {title, value} = event.target
  
    this.setState({
      [title]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const {title,username} = this.state;
  
    return (
      <Form inverted style={{ width: "470px" }}>
        <header><h1>Book Transactions</h1></header>
        <Divider /><br />
        <Form.Field>
        <label>Title</label>
        <input type="text" name="title"id="title" value={title} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
        <label>Username</label>
        <input type="text" name="username" id="username"value={username} onChange={this.handleChange} />
        </Form.Field>
        <Divider /><br />
        <Button onClick={this.submitForm} primary basic inverted color='grey'>Search</Button>
        <Button onClick={this.submitForm} primary basic inverted color='black'>Cancel</Button>
      </Form>
    );
  }
  
}

export default BooktransactionForm;