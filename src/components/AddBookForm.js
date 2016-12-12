import React, {PropTypes} from 'react';

class AddBookForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {titleInput :''};
  }

  static propType = {
    addBookAction: PropTypes.func.isRequired
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    this.props.addBookAction(
      this.state.titleInput,this.refs.bookPrice.value, this.refs.bookAuthor.value);

      this.setState({titleInput:''});
      this.refs.bookPrice.value ='';
      this.refs.bookAuthor.value = '';
  }
  handleTitleChange = (event) => {
    this.setState({titleInput: event.target.value});
  };


  handlePriceChange = (event) => {
    console.log("In handlePriceChnage method")
  };

  render(){
    return(
      <div className="Form">
        <input type="text" placeholder="Book Title"
        value={this.state.titleInput}
        onChange={this.handleTitleChange} />
        <input type="text" placeholder="Book Price"
        ref="bookPrice" onChange={this.handlePriceChange}/>

        <input type="text" placeholder="Book Author"
        ref="bookAuthor" />

        <button onClick={this.handleButtonClick}>
          Add Book
        </button>
      </div>
    );
  }
}

export default AddBookForm;
