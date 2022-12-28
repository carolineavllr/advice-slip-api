import styled, { keyframes } from "styled-components"
import header from "../images/header.png"

export const Image = () => (
  <ImageContainer>
    <img src={header} alt="Imagem"></img>
  </ImageContainer>
)

const heartbeat = keyframes`
from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`

const ImageContainer = styled.div`
  max-width: 40vw;

  img {
    width: 100%;
    animation: ${heartbeat} 5s ease-in-out infinite both;
  }
`
