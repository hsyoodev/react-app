import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Article from '../components/Article';
import Comment from '../components/Comment';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';

function Read(props) {
  return (
    <>
      <Header />
      <Nav />
      <div id="container">
        <Article />
        <Comment />
        <ArticleList />
      </div>
      <Footer />
    </>
  );
}

Read.propTypes = {};

export default Read;
