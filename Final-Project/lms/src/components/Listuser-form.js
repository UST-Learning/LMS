import React, {Component} from 'react'

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
      <form>
        <header>
          <h1>List User</h1>
          </header>
        <label htmlFor="loginid">Login id </label>

        <input
          type="text"
          name="loginid"
          id="loginid"
          placeholder="Login id"
          value={loginid}
          onChange={this.handleChange} /><br></br>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="fullname"
          name="fullname"
          id="fullname"
          placeholder="Full name"
          value={fullname}
          onChange={this.handleChange} /><br></br>
          <input type="button" value="Search user" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.submitForm} />
          
      </form>
    );
  }
  
}
export default ListuserForm;