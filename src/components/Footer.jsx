import React from 'react';
import PropTypes from 'prop-types';

function Footer({ list }) {
  return (
    <footer>
      {list.map((v) => (
        <h5>{v}</h5>
      ))}
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
