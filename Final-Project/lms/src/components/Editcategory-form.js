import React, {Component} from 'react'

class EditcategoryForm extends Component {
  initialState = {
    categoryname: ''
  }

  state = this.initialState
  handleChange = (event) => {
    const {categoryname, value} = event.target
  
    this.setState({
      [categoryname]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { categoryname} = this.state;
  
    return (
      <form>
          <h1>Edit Category</h1>
        <label htmlFor="category name">Category Name</label>
        <input
          type="text"
          name="categoryname"
          id="categoryname"
          value={categoryname}
          onChange={this.handleChange} /><br></br>
        <input type="button" value="Update" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default EditcategoryForm;