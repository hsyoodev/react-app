import styles from '../App.module.css';

function Scissors({ setPlayer, setCom }) {
  const onClick = (e) => {
    setCom(parseInt(Math.random() * 3));
    setPlayer(1);
  };

  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/scissors.png"
        alt="가위"
        onClick={onClick}
      />
    </div>
  );
}

export default Scissors;
