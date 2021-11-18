import React, {Component} from 'react'

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
      <form>
          <h1>Book Transactions</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} /><br></br>
          <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={this.handleChange} />
         <br></br>
        <input type="button" value="Search" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default BooktransactionForm;