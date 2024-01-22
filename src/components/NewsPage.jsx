import { useEffect, useState } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';
import { useParams } from 'react-router-dom';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const param = useParams();
  const path = param['*'] || 'all';
  console.log(param);

  useEffect(() => {
    const fetchData = async () => {
      const query = path === 'all' ? '' : `&category=${path}`;
      const data = await fetch(
        'https://newsapi.org/v2/top-headlines' +
          '?country=kr&apiKey=1f6a842fa9c243b796d7f61887892f9e' +
          `${query}`
      );
      const response = await data.json();
      setArticles(response.articles);
    };
    fetchData();
  }, []);
  return (
    <>
      <Categories categories={categories} />
      <NewsList articles={articles} />
    </>
  );
};

export default NewsPage;
