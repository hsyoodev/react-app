function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>안녕하세요!</h1>
      {unreadMessages.length > 0 && (
        <h2>현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.</h2>
      )}
    </div>
  );
}

function App() {
  const unreadMessages = ['msg1', 'msg2'];
  return (
    <>
      <MailBox unreadMessages={unreadMessages} />
    </>
  );
}

export default App;
