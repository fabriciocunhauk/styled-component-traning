import React from 'react';
import styled from 'styled-components';

import Card from './components/Card/Card.component';

import './App.css';

const Text = styled.div`
  color: red;
  font-size: 20px;
  border: ${({ isActive }) =>
    isActive ? '1px solid black' : '3px dotted green'};
`;

function App() {
  return (
    <div className="App">
      <Card>
        <Text isActive={true}>Im a component</Text>
      </Card>
    </div>
  );
}

export default App;
