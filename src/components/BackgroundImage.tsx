import React from 'react'
import styled from 'styled-components'

interface IProps {
  image: string
  alt?: string
  className?: string
}

const BackgroundImage = ({ image, alt, className }: IProps) => (
  <Container
    image={image}
    role="img"
    aria-label={alt ?? 'background image'}
    className={className}
  >
    <Overlay />
  </Container>
)

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: ${(props: { image: string }) => `url(${props.image})`};
  background-position: bottom;
  background-size: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  ${({ theme }) => `
    background: linear-gradient(
      45deg,
      ${theme.colors.astronaut} 0%,
      ${theme.colors.curiousBlue} 100%
    );
  `}
  opacity: 0.5;
`

export default BackgroundImage
