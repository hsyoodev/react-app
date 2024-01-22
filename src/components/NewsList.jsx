import NewsItem from './NewsItem';
import styles from './NewsList.module.css';

const NewsList = ({ articles }) => {
  return (
    <div className={styles.block}>
      {articles.map((article) => {
        return <NewsItem key={article.title} article={article} />;
      })}
    </div>
  );
};

export default NewsList;
