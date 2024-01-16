import styles from '../App.module.css';

function Paper({ setPlayer, setCom }) {
  const onClick = (e) => {
    setCom(parseInt(Math.random() * 3));
    setPlayer(2);
  };

  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/paper.png"
        alt="보"
        onClick={onClick}
      />
    </div>
  );
}

export default Paper;
