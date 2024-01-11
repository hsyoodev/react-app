import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.content}
    </header>
  );
}

Header.propTypes = {};

export default Header;
