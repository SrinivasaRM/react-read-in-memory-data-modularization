import React from 'react';

import Book from './Book';
import AddBookForm from './AddBookForm';

/** BookList is the Statefull Component for listing the Book data in UI **/
class BookList extends React.Component{
  constructor(props){
    super(props);
    this.state={books : this.props.books};
  }
  /** Event Handler to delete the book **/
  deleteBook = (id) => {
    const currentBooks = this.state.books;
    const books = currentBooks.filter(book => book.id !== id);
    this.setState({books});
  }

  addBook = (title,price) => {
    this.setState({
      books:this.state.books.concat({
      id:Date.now(),
      title,
      price
    })
  });
}
  render(){
        return(
          <ul className="book-list">
              {this.state.books.map(book => {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    author={this.props.authors[book.authorId]}
                    handleDelete={this.deleteBook}/>);
              }
            )
          }

          <div>
            <AddBookForm addBookAction={this.addBook} />
          </div>
        </ul>
      );
    }
  }
export default BookList;
