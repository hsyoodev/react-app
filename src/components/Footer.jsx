import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer id="footer">
      <p className="copy">
        COPYRIGHT (C) <span>MNTALK.</span> ALL RIGHTS RESERVED
      </p>
      <ul className="fmenu cf">
        <li>
          <a href="userag.html">이용약관</a>
          <span>|</span>
        </li>
        <li>
          <a href="privacy.html">
            <u>개인정보 처리방침</u>
          </a>
          <span>|</span>
        </li>
        <li>
          <Link to="/adsform">광고문의</Link>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
