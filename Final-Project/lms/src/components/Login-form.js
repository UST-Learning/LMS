import React, {Component} from 'react'
//import { useHistory } from 'react-router-dom';
//import {Link} from 'react-router-dom';

class Form extends Component {
   inhistory = () =>{
        const {history} =this.props;
    if(history) history.push('/searchbook');

    }
    onhistory = () =>{
    const {history} =this.props;
    if(history) history.push('/adduser');
    
    }
   
  initialState = {
    name: '',
    password: '',
   usertype:''
  }

  state = this.initialState
  handleChange = (event) => {
    const {name, value} = event.target
  
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
    const {history} =this.props;
   
  
    return (
      <form>
               <div class="form-control">
                 <header><h1>Login</h1></header>
                <label class="header">User type</label>
                
                <select value={this.state.value} onChange={this.handleChange}>           
            <option value="admin">Admin</option>
            <option value="user">User</option>
            </select>
            </div>
        <label htmlFor="name">User Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={this.handleChange} />
          <input type="button" value="Login" onClick={this.inhistory} />
          <input type="button" value="Guest" onClick={this.inhistory} />
          <input type="button" value="Create Account" onClick={this.onhistory} />
      </form>
    );
  }
  
}

export default Form