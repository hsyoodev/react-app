import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header id="header">
      <div id="headerIn">
        <h1 className="logo">
          <a href="#">
            <img src="img/logo.jpg" alt="멍냥토크" />
          </a>
        </h1>
        <div className="search">
          <input type="text" className="src" />
          <label>검색하기</label>
          <select className="h_category">
            <option>전체</option>
            <option>멍톡</option>
            <option>냥톡</option>
            <option>잡담</option>
            <option>헬프</option>
          </select>
          <a href="#" className="srcimg">
            <img src="img/srcimg.jpg" alt="검색" />
          </a>
        </div>
        <div className="login ut">
          <a href="mypage.html">
            <img src="img/user.svg" className="profileimg" />
            <span className="username">
              <strong>이름</strong>
            </span>
          </a>
          <span className="user2"> 님, 환영합니다.</span>
        </div>
        <a href="#" className="logout">
          로그아웃
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
