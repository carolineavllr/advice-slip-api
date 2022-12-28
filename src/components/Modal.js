import styled, { keyframes } from "styled-components"

export const Modal = ({ phrase, show, onClose = () => {} }) => (
  <ModalContainer show={show}>
    <Box>
      <span>#{phrase?.id}</span>
      <p>{phrase?.advice}</p>
      <Close onClick={onClose}>X</Close>
    </Box>
  </ModalContainer>
)

const slideIn = keyframes`
  0% {
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0) scale(1);
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`

const ModalContainer = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 40px;
  position: fixed;
  background: #deb996;
  align-items: center;
  justify-content: center;
  display: ${({ show }) => show ? 'flex' : 'none'};
`

const Box = styled.div`
  padding: 40px;
  max-width: 400px;
  background: white;
  text-align: center;
  position: relative;
  border-radius: 20px;
  animation: ${slideIn} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  span {
    color: gray;
    font-size: 14px;
  }

  p {
    font-size: 28px;
  }
`

const Close = styled.button`
  left: 50%;
  bottom: -20px;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  background: #a24f00;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  border: 2px solid gainsboro;
  font-family: 'Patrick Hand', cursive;
`