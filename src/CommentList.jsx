import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const comments = [
  { name: 'Mike', comment: '안녕하세요.' },
  { name: 'Steve', comment: '반갑습니다.' },
  { name: 'Jane', comment: 'Hello~' },
];

function CommentList(props) {
  return (
    <div>
      {comments.map(({ name, comment }) => (
        <Comment name={name} comment={comment} />
      ))}
    </div>
  );
}

CommentList.propTypes = {};

export default CommentList;
