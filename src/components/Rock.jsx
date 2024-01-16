import styles from '../App.module.css';

function Rock({ setPlayer, setCom }) {
  const onClick = (e) => {
    setCom(parseInt(Math.random() * 3));
    setPlayer(0);
  };

  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/rock.png"
        alt="바위"
        onClick={onClick}
      />
    </div>
  );
}

export default Rock;
