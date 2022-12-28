import { Image } from './components/Image';
import { Action } from './components/Action';
import styled from 'styled-components';
import React from 'react';
import { Modal } from './components/Modal';

function App() {
  const [advice, setAdvice] = React.useState()

  return (
    <Container>
      <Image />
      <Action
        onSelect={() => getAdvice().then(setAdvice)}
      />
      <Modal
        show={!!advice}
        phrase={advice}
        onClose={() => setAdvice()}
      />
    </Container>
  );
}

export const getAdvice = () => (
  fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((result) => result.slip)
)

export default App;

const Container = styled.div`
  gap: 20px;
  margin: auto;
  display: flex;
  padding: 40px;
  max-width: 600px;
  background: white;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;`