import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'
import PartnerLogoComponent from '../components/PartnerLogo'
import Profile from '../components/Profile'

// Types
import { IAboutPageData } from '../types/data'

const AboutPage = ({ data }: any) => {
  const content: IAboutPageData = data.prismicAbout.data
  return (
    <main>
      <SEO title="De praktijk" />
      <ContentWrapper size="text">
        <Title>{content.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: content.text.html }} />
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
        <Profile
          name={content.name}
          text={content.description.html}
          image={content.profile_image.url}
        />
      </ContentWrapper>
    </main>
  )
}

const Title = styled.h1`
  ${textStyles.pageTitle};
`

const LogoWrapper = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-bottom: calc(56px - 16px);

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 80px;
  }
`

const PartnerLogo = styled(PartnerLogoComponent)`
  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 16px;
  }
`

export const query = graphql`
  query aboutpage {
    prismicAbout {
      data {
        name
        description {
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
        profile_image {
          alt
          url
        }
        text {
          html
        }
        title
      }
    }
  }
`

export default AboutPage
