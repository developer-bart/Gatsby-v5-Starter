import React from 'react'
import styled, { css } from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IIndexPageData } from '../types/data'

// Styling
import textStyles from '../styles/textStyles'
import theme from '../styles/theme'

// Components
import SEO from '../components/Seo'
import BackgroundImage from '../components/BackgroundImage'
import ContentWrapperComponent from '../components/ContentWrapper'
import IntroComponent from '../components/Intro'
import LineWrapperComponent from '../components/LineWrapper'
import TestimonialComponent from '../components/Testimonial'

interface IProps {
  data: any
}

const IndexPage = ({ data }: IProps) => {
  const content: IIndexPageData = data.prismicHomepage.data
  return (
    <main>
      <SEO title="Home" />
      <BackgroundImage
        image={content.background_image.url}
        alt={content.background_image.alt}
      />

      <ContentWrapper size="full">
        <Intro
          title={content.title}
          text={content.text.html}
          button={content.button}
          animation
        />
        <LineWrapper color={theme.colors.white} animation>
          <Title>{content.testimonials_title}</Title>
          {content.testimonials &&
            content.testimonials.map((testimonial, i) => (
              <Testimonial
                key={i}
                testimonial={testimonial}
                iconColor={theme.colors.white}
              />
            ))}
        </LineWrapper>
      </ContentWrapper>
    </main>
  )
}

const ContentWrapper = styled(ContentWrapperComponent)`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    margin: 56px auto 0;
    color: ${theme.colors.white};

    @media (min-width: ${theme.sizes.M}px) {
      flex-direction: row;
    }
  `}
`

const Intro = styled(IntroComponent)`
  margin-bottom: 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 60%;
    margin-right: 16px;
    margin-bottom: 0;
  }
`

const LineWrapper = styled(LineWrapperComponent)`
  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 40%;
    margin-left: 16px;
  }
`

const Title = styled.h2`
  ${textStyles.title};
`

const Testimonial = styled(TestimonialComponent)`
  margin-bottom: 32px;

  :last-of-type {
    margin-bottom: 0;
  }
`

export const query = graphql`
  query homepage {
    prismicHomepage {
      data {
        button
        testimonials_title
        testimonials {
          name
          testimonial
        }
        text {
          html
        }
        title
        background_image {
          url
          alt
        }
      }
    }
  }
`

export default IndexPage
