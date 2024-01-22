import styles from './NewsItem.module.css';

const NewsItem = ({ article: { url, urlToImage, title, description } }) => {
  return (
    <div className={styles.block}>
      <div className={styles.thumbnail}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={urlToImage} alt="thumbnail" />
        </a>
      </div>
      <div className={styles.contents}>
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
