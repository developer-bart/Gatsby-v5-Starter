import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
  animation: boolean
  color?: string
  className?: string
}

const LineWrapper = ({ children, color, animation, className }: IProps) => (
  <Container className={className}>
    <Border color={color} animation={animation} />
    <Content animation={animation}>{children}</Content>
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

  min-width: 1px;
  min-height: 100%;
  margin-right: 3px;
  background-color: ${({ color, theme }) => color ?? theme.colors.astronaut};
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

  flex-direction: column;
  align-items: flex-start;
  display: flex;
  padding: 24px 16px;
  transition: ${({ theme }) => theme.animations.slowTransition};
  ${({ animation }: { animation: boolean }) =>
    animation &&
    `
    transform: translateX(-50px);
    opacity: 0;
    animation: contentIn 0.4s ease-in-out 1s forwards
  `};
`

export default LineWrapper
