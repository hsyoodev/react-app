import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({ categories }) => {
  return (
    <div className={styles.block}>
      {categories.map((c) => (
        <a
          href={c.name === 'all' ? '/' : `/${c.name}`}
          key={c.name}
          className={styles.category}
        >
          {c.text}
        </a>
      ))}
    </div>
  );
};

export default Categories;
