function Header(props) {
  const onClick = (e) => {
    e.target.innerHTML = 'WAP';
    e.target.style.border = '1px solid black';
  };

  return (
    <header>
      <h1 onClick={onClick}>{props.title}</h1>
      {props.content}
    </header>
  );
}
export default Header;
