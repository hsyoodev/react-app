function Result({ result, getMessage }) {
  return (
    <div className="result">
      <h1>Com: {result.com}</h1>
      <h1>Player: {result.player}</h1>
      {result.player !== undefined ? <h1>{result.message}</h1> : null}
    </div>
  );
}

export default Result;
