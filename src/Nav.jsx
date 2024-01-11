import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href="1.html">{props.list1}</a>
        </li>
        <li>
          <a href="2.html">{props.list2}</a>
        </li>
        <li>
          <a href="3.html">{props.list3}</a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
