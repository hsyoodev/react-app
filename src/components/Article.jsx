import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <>
      <div className="mainTop cf">
        <h2>전체</h2>
        <h3>
          <strong>GUIDE</strong>
          <span>
            {' '}
            자유롭게 글을 올리실 수 있습니다. 자유로운 만큼 더욱 더 예절을
            지켜주시기 바랍니다.
          </span>
        </h3>
        <p className="mainRec btn">
          <a href="#">추천글</a>
        </p>
        <p className="mainWrite btn">
          <a href="#">글쓰기</a>
        </p>
      </div>

      <div className="title">
        <table>
          <th>제목 영역</th>
          <th></th>
          <th></th>
          <th></th>
          <tbody>
            <td>작성자: 팅팅이</td>
            <td>작성일: 2019/12/03</td>
            <td>조회수: 1975</td>
            <td>추천: 11</td>
          </tbody>
        </table>
        <div className="postArea cf">
          <div className="postMain">글 들어오는 공간</div>
          <div className="postBottom">
            <p>
              추천수: <span>11</span>
            </p>
            <p>
              <a href="#">추천하기</a>
            </p>
            <p>
              <a href="#">공유하기</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Article.propTypes = {};

export default Article;
