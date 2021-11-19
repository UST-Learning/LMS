import React, {Component} from 'react'
import { Button, Checkbox, Divider, Form } from "semantic-ui-react";
class EditbookForm extends Component {
  initialState = {
    booktitle: '',
    bookcategory: '',
    bookauthor:'',
    bookpublisher:'',
    stock:''
  }

  state = this.initialState
  handleChange = (event) => {
    const {booktitle, value} = event.target
  
    this.setState({
      [booktitle]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { booktitle, bookcategory, bookauthor, bookpublisher, stock} = this.state;
  
    return (
      <Form inverted style={{ width: "470px" }}>
         <header> <h1>Edit Book</h1> </header> 
         <Divider /><br />
         <Form.Field>
        <label>Book Title</label>
        <input type="text" name="booktitle" id="booktitle" value={booktitle} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
        <label class="header">Book Category</label>
        <select value={this.state.value} onChange={this.handleChange}></select>
        </Form.Field>
        <Form.Field>
          <label htmlFor="bookauthor">Book Author</label>
        <input type="text" name="bookauthor" id="bookauthor" value={bookauthor} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Book Publisher</label>
        <input type="text" name="bookpublisher" id="bookpublisher" value={bookpublisher} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Stock</label>
        <input type="text" name="stock" id="stock" value={stock} onChange={this.handleChange} />
        </Form.Field>
        <Divider /><br />
        <Button onClick={this.submitForm} primary basic inverted color='grey'>Update</Button>
        <Button onClick={this.submitForm} primary basic inverted color='black'>Cancel</Button>

      </Form>
    );
  }
  
}

export default EditbookForm;