import styled from "styled-components"

export const Action = ({onSelect = () => {}}) => (
  <Button onClick={onSelect}>Get an advice</Button>
)

const Button = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  transition: .8s;
  font-size: 26px;
  padding: 10px 30px;
  border-radius: 50px;
  background: #cd5f55;
  font-family: 'Patrick Hand', cursive;

  &:hover {
    background: #f4bc58;
  }
`