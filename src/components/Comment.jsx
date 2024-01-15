import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  return (
    <div className="comment">
      <div className="showCmt">
        <span>6</span>개의 댓글이 있습니다.
      </div>
      <div className="cmtList">
        <ul>
          <li>
            <div className="cuser">
              <span className="cname"> 츄레이서 </span>
              <span className="ctime">2019-12-03 15:39:23</span>
            </div>
            <div className="ctext">
              왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽
            </div>
          </li>
          <li>
            <div className="cuser">
              <span className="cname"> 츄레이서 </span>
              <span className="ctime">2019-12-03 15:39:23</span>
            </div>
            <div className="ctext">
              왜 저렇게 호달달달 떨어요ㅋㅋㅋㅋㅋㅋ 귀엽
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

Comment.propTypes = {};

export default Comment;
