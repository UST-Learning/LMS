import React, {Component} from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";
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
      <Form inverted style={{ width: "470px" }}>
         <header> <h1>Search Book</h1> </header> 
         <Divider /><br />
         <Form.Field>
        <label>Title</label>
        <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
           </Form.Field>
           <Form.Field>
         <label>Book Category</label>
                <select value={this.state.value} onChange={this.handleChange}> </select>
            </Form.Field>
            <Divider />
          <Button onClick={this.submitForm} primary basic inverted color='grey'>Search Book</Button>
          <Button onClick={this.inhistory} primary basic inverted color='black'>Cancel</Button>
      </Form>
    );
  }
  
}

export default SearchbookForm;