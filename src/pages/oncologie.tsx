import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'
import Header from '../components/Header'
import IntroComponent from '../components/Intro'
import TestimonialComponent from '../components/Testimonial'
import LineWrapperComponent from '../components/LineWrapper'
import PartnerLogo from '../components/PartnerLogo'
import CTA from '../components/CTA'

// Types
import { IOncologyPageData } from '../types/data'

const OncologyPage = ({ data }: any) => {
  const content: IOncologyPageData = data.prismicOncologie.data
  return (
    <main>
      <SEO title="Oncologie" />
      <Header title={content.title} image={content.header_image.url} />
      <ContentWrapper size="text">
        <Intro text={content.intro.html} animation={false} />
        <Testimonial
          testimonial={{
            testimonial: content.testimonial,
            name: content.testimonial_author,
          }}
          size="large"
        />
        <LineWrapper animation={false}>
          <Text dangerouslySetInnerHTML={{ __html: content.text.html }} />
          <LogoWrapper>
            {content.partner_logos.map((partner, i) => (
              <PartnerLogo
                key={i}
                image={partner.partner_logo.url}
                alt={partner.partner_logo.alt}
                url={partner.url}
                size={partner.size}
              />
            ))}
          </LogoWrapper>
        </LineWrapper>
        <CTA />
      </ContentWrapper>
    </main>
  )
}

const Intro = styled(IntroComponent)`
  margin-bottom: 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 64px;
  }
`

const LineWrapper = styled(LineWrapperComponent)`
  margin-bottom: 72px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 88px;
  }
`

const Testimonial = styled(TestimonialComponent)`
  max-width: 480px;
  margin: 0 auto 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 64px;
  }
`

const Text = styled.div`
  ${textStyles.body};

  p:last-child {
    margin-bottom: 0;
  }
`

const LogoWrapper = styled.div`
  flex-direction: column;
  display: flex;

  > a:first-child {
    margin-bottom: 16px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.S}px) {
    flex-direction: row;
    align-items: center;

    > a:first-child {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }
`

export const query = graphql`
  query oncologiepage {
    prismicOncologie {
      data {
        intro {
          html
        }
        partner_logos {
          partner_logo {
            alt
            url
          }
          size
          url
        }
        testimonial
        testimonial_author
        text {
          html
        }
        title
        header_image {
          url
          alt
        }
      }
    }
  }
`

export default OncologyPage
