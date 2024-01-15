import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Adsform(props) {
  return (
    <>
      <Header />
      <Nav />
      <div id="container">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

Adsform.propTypes = {};

export default Adsform;
