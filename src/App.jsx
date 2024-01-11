function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <div className="comment-text" style={{ fontSize: '2rem' }}>
        {props.text}
      </div>
      <div className="comment-date">{props.date}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar author={props.author} />
      <div className="user-info-name">{props.author.name}</div>
    </div>
  );
}

function App() {
  const author = {
    name: 'name',
    avatarUrl: 'http://ggoreb.com/images/img_avatar1.png',
  };
  return (
    <div>
      <Comment author={author} text="text" date={new Date().toString()} />
    </div>
  );
}

export default App;
