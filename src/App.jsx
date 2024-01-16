function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
}

export default App;
