import React, {Component} from 'react'

class SearchbookForm extends Component {
  inhistory = () =>{
    const {history} =this.props;
if(history) history.push('/');

}
  initialState = {
    title: '',
    bookcategory:''
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
    const {title,bookcategory} = this.state;
  
    return (
      <form>
          <h1>Search Book</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} /><br></br>
         <label class="header">Book Category</label>
                <select value={this.state.value} onChange={this.handleChange}>           
            </select><br></br>
        <input type="button" value="Search Book" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.inhistory} />
      </form>
    );
  }
  
}

export default SearchbookForm;