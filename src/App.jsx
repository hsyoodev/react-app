import { useState } from 'react';

function Card(props) {
  const { title, backgroundColor, children } = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: '0px 0px 4px grey',
        backgroundColor: backgroundColor || 'white',
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

function App() {
  return (
    <Card title="리액트" backgroundColor="#bde7c5">
      <p>제목 데이터</p>
      <p>내용 데이터</p>
    </Card>
  );
}

export default App;
