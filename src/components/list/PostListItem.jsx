import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 35px);
  padding: px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const navigate = useNavigate();
  const { post, onClick } = props;
  console.log(post);
  return (
    <Wrapper onClick={onClick}>
      <TitleText>
        {post.title} ({post.comments.length})
      </TitleText>
      <Button
        title="삭제"
        onClick={async (e) => {
          e.preventDefault();
          const data = await fetch('http://localhost:8080/post-delete', {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(post),
            //           {title: "제목", content: "내용"}
          });
          const res = await data.json();
          alert(res.msg);
          if (res.code == 200) {
            navigate('/');
          }
          // navigate('/');
        }}
      />
    </Wrapper>
  );
}

export default PostListItem;
