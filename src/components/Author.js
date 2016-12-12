import React from 'react';

/** This is React Stateless Component **/
const Author = ({firstName, lastName}) => (
  <div className="Author">
    --{firstName} {lastName}
  </div>
);

export default Author;
