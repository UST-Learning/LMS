import React, {Component} from 'react'

class AddbookForm extends Component {
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
      <form>
          <h1>Add Book</h1>
        <label htmlFor="booktitle">Book Title</label>
        <input
          type="text"
          name="booktitle"
          id="booktitle"
          value={booktitle}
          onChange={this.handleChange} /><br></br>
        <label class="header">Book Category</label>
                <select value={this.state.value} onChange={this.handleChange}>           
            </select><br></br>
          <label htmlFor="bookauthor">Book Author</label>
        <input
          type="text"
          name="bookauthor"
          id="bookauthor"
          value={bookauthor}
          onChange={this.handleChange} /><br></br>
          <label htmlFor="bookpublisher">Book Publisher</label>
        <input
          type="text"
          name="bookpublisher"
          id="bookpublisher"
          value={bookpublisher}
          onChange={this.handleChange} /><br></br>
          <label htmlFor="stock">Stock</label>
        <input
          type="text"
          name="stock"
          id="stock"
          value={stock}
          onChange={this.handleChange} /><br></br>
          <input type="button" value="Save" onClick={this.submitForm} />
          <input type="button" value="Cancel" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default AddbookForm;