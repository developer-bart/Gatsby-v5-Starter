import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Styles
import textStyles from '../styles/textStyles'

// Components
import Button from './Button'

interface IProps {
  text: string
  animation: boolean
  title?: string
  button?: string
  className?: string
}

const Intro = ({ title, text, button, animation, className }: IProps) => (
  <Container className={className}>
    <Border animation={animation} />
    <Content animation={animation}>
      {!!title && <Title>{title}</Title>}
      <Text noMargin={!button} dangerouslySetInnerHTML={{ __html: text }} />
      {!!button && <StyledLink to="/contact">{button}</StyledLink>}
    </Content>
  </Container>
)

const Container = styled.section`
  display: flex;
  overflow: hidden;
`

const Border = styled.div`
  @keyframes borderIn {
    100% {
      transform: translateY(0);
    }
  }

  z-index: 1;
  min-width: 4px;
  min-height: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.curiousBlue};
  ${({ animation }: { animation: boolean }) =>
    animation &&
    `
    transform: translateY(-100%);
    animation: borderIn 1s ease-in-out forwards
  `};
`

const Content = styled.div`
  @keyframes contentIn {
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  padding: 24px 16px;
  ${({ animation }: { animation: boolean }) =>
    animation &&
    `
    transform: translateX(-50px);
    opacity: 0;
    animation: contentIn 0.4s ease-in-out 1s forwards
  `};
`

const Title = styled.h1`
  ${textStyles.pageTitle};
`

const Text = styled.div`
  > p {
    ${textStyles.body};
  }

  > p:last-child {
    ${(props: { noMargin: boolean }) => props.noMargin && 'margin-bottom: 0;'};
  }
`

const StyledLink = styled(Link)`
  ${Button};
`

export default Intro
