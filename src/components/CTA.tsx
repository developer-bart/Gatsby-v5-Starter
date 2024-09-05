import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'
import { fadeIn } from '../styles/animations'

// Component
import Button from './Button'

// Types
import { ICTA } from '../types/data'

const CTA = () => {
  const data = useStaticQuery(graphql`
    query cta {
      prismicCallToAction {
        data {
          title
          text {
            html
          }
          links {
            label
            url
          }
          image {
            url
            alt
          }
        }
      }
    }
  `)
  const content: ICTA = data.prismicCallToAction.data
  return (
    <Container>
      <Image image={content.image.url} role="img" alt={content.image.alt} />
      <Content>
        <Title>{content.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: content.text.html }}></div>
        {content.links.map((link, i) => (
          <A key={i} href={link.url}>
            {link.label}
          </A>
        ))}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.curiousBlue};
  opacity: 0;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`

interface IImage {
  image: string
  role: string
  alt: string
}
const Image = styled.div<IImage>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.sizes.S}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.sizes.S}px) {
    width: 33.33333%;
  }

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 50%;
  }
`

const Content = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  width: 100%;
  padding: 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.sizes.S}px) {
    width: 66.66666%;
  }

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 50%;
    padding: 32px;
  }
`

const Title = styled.h2`
  ${textStyles.title};
`

const A = styled.a`
  ${Button};
  font-size: 12px;

  @media (min-width: ${({ theme }) => theme.sizes.S}px) {
    font-size: 14px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    font-size: 16px;
  }

  :first-of-type {
    margin-bottom: 16px;
  }
`

export default CTA
