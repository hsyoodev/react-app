import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  return (
    <nav>
      <ul>
        {props.list.map((item, index) => {
          return (
            <li key={index}>
              <a href={`${index + 1}.html`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
