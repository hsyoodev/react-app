import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
// import data from '../../data.json';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

function MainPage(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data2 = await fetch('http://localhost:8080/posts');
      const res = await data2.json();
      setData(res.posts.content);
      setStartPage(res.startPage);
      setEndPage(res.endPage);
      let pagination = [];
      for (let i = startPage; i <= endPage; i++) {
        pagination.push(
          <button
            key={i}
            onClick={async () => {
              const data2 = await fetch(
                `http://localhost:8080/posts?pageNumber=${i}`
              );
              const res = await data2.json();
              setData(res.posts.content);
              setStartPage(res.startPage);
              setEndPage(res.endPage);
              navigate(`/?pageNumber=${i}`);
            }}
          >
            {i}
          </button>
        );
      }
      setPagination(pagination);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Link to="/post-write">글 작성</Link>
        <Button
          title="글 작성하기"
          onClick={() => {
            // window.location.href = '/post-write';
            navigate('/post-write');
          }}
        />

        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
        {pagination}
      </Container>
    </Wrapper>
  );
}

export default MainPage;
