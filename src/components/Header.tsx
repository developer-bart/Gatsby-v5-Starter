import React from 'react'
import styled from 'styled-components'

// Styling
import textStyles from '../styles/textStyles'

// Components
import ContentWrapperComponent from './ContentWrapper'

interface IProps {
  title: string
  image: string
}

const Header = ({ title, image }: IProps) => (
  <Container image={image}>
    <Overlay />
    <ContentWrapper size="text">
      <Title>{title}</Title>
    </ContentWrapper>
  </Container>
)

const Container = styled.header`
  box-sizing: border-box;
  position: relative;
  align-items: center;
  display: flex;
  height: 320px;
  background-image: url(${(props: { image: string }) => props.image});
  background-position: left;
  background-size: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.astronaut} 0%,
    ${({ theme }) => theme.colors.curiousBlue} 100%
  );
  opacity: 0.4;
`

const ContentWrapper = styled(ContentWrapperComponent)`
  padding: 48px 16px 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    padding: 64px 32px 64px;
  }
`

const Title = styled.h1`
  ${textStyles.pageTitle};
  position: relative;
  z-index: 1;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`

export default Header
