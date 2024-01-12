import React from 'react';

function Footer({ list }) {
  const onClick = (e) => {
    e.target.style.backgroundColor = 'beige';
    e.target.style.textDecoration = 'underline';
  };

  return (
    <footer>
      {list.map((v, i) => (
        <h5 key={i} onClick={onClick}>
          {v}
        </h5>
      ))}
    </footer>
  );
}

export default Footer;
