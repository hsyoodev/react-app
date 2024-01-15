import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  return (
    <nav id="lnb">
      <ul className="cf">
        <li>
          <a href="#">전체</a>
        </li>
        <li>
          <a href="#">멍톡</a>
        </li>
        <li>
          <a href="#">냥톡</a>
        </li>
        <li>
          <a href="#">잡담</a>
        </li>
        <li>
          <a href="#">헬프</a>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
