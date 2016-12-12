import React from 'react';
import ReactDOM from 'react-dom';

import {data} from './data';
import BookList from './components/BookList';
/** Log Statmenets for books and authors objects**/
console.log(data.books);
console.log(data.authors);

ReactDOM.render(
  <BookList books={data.books} authors={data.authors} />,
  document.getElementById('root')
);
