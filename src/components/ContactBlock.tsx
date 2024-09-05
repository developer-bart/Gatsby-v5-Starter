import React from 'react'
import styled from 'styled-components'

// Styling
import textStyles from '../styles/textStyles'

interface ILinkType {
  url: string
  label: string
}

interface IProps {
  title: string
  text: string
  links: ILinkType[]
  className?: string
}

const ContactBlock = ({ title, text, links, className }: IProps) => (
  <Container className={className}>
    <PageTitle>{title}</PageTitle>
    <IntroText>{text}</IntroText>
    {links.map((link, i) => (
      <Link key={i} href={link.url}>
        {link.label}
      </Link>
    ))}
  </Container>
)

const Container = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  max-width: 560px;
`

const PageTitle = styled.h1`
  ${textStyles.pageTitle};
`

const IntroText = styled.p`
  ${textStyles.body};
`

const Link = styled.a`
  ${textStyles.bodyLarge};
  position: relative;
  margin-bottom: 8px;
  text-decoration: none;

  :last-child {
    margin-bottom: 0;
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scale(0);
    transition: transform ${({ theme }) => theme.animations.slowTransition};
    background-color: ${({ theme }) => theme.colors.curiousBlue};
    content: '';
  }

  :hover:after {
    transform: scale(1);
  }
`

export default ContactBlock
