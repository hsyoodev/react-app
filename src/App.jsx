import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => (props.black ? 'white' : 'black')};
  background: ${(props) => (props.black ? 'black' : 'white')};
  border: 1px solid black;
`;
const RoundedButton = styled(Button)`
  border-radius: 16px;
`;
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: lightgrey;
`;
const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.bg};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
const blockItems = [
  {
    label: 1,
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: 2,
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: 3,
    padding: '2rem',
    backgroundColor: 'blue',
  },
];

function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem, i) => {
        return (
          <Block
            padding={blockItem.padding}
            bg={blockItem.backgroundColor}
            key={i}
          >
            {blockItem.label}
          </Block>
        );
      })}
    </Wrapper>
  );
}

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <Button black>Dark</Button>
      <RoundedButton>Rounded</RoundedButton>
      <Wrapper>
        <Block padding="20px" bg="green">
          Test
        </Block>
      </Wrapper>
    </div>
  );
}

export default App;
