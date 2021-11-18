import React, {Component} from 'react'

class AdduserForm extends Component {
  inhistory = () =>{
    const {history} =this.props;
if(history) history.push('/');
  }
  initialState = {
    email: '',
    password: '',
    login_id:'',
    fname:'',
    address:'',
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
    const { email, password,login_id,fname,address } = this.state;
  
    return (
      <form>
          <div class="form-control">
          <header>
                   <h1>Add User</h1>
                   </header>
                <label class="header">Login id</label>
                
                <input id="Login" type="text" name="Login" placeholder="login id" required="" capture value={login_id}
          onChange={this.handleChange}/><br></br>
            </div>
        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange} /><br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange} /><br></br>
 <label htmlFor="fullname">Full Name</label>
        <input
          type="fname"
          name="fname"
          id="fname"
          placeholder="Full Name"
          value={fname}
          onChange={this.handleChange} /><br></br>
        <label htmlFor="Address">Address</label>
        <input
          type="address"
          name="address"
          id="address"
          placeholder="Address"
          value={address}
          onChange={this.handleChange} /><br></br>

          <input type="button" value="Create account" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.inhistory} />
      </form>
    );
  }
  
}

export default AdduserForm;