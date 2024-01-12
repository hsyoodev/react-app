import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {};

export default Header;