import { useState, useMemo, useRef } from 'react';

import { Component } from 'react';
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}
export default App;
