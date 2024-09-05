import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IPricesAndAllowances } from '../types/data'

// Styles
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'
import PriceTable from '../components/PriceTable'
import PartnerLogo from '../components/PartnerLogo'

const TarievenVergoedingenPage = ({ data }: any) => {
  const content: IPricesAndAllowances = data.prismicPrijzenEnVergoedingen.data
  return (
    <main>
      <SEO title="Tarieven en vergoedingen" />
      <ContentWrapper size="text">
        <Title>{content.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: content.text.html }}></div>
        <Prices>
          {content.prices.map((price, i) => (
            <PriceTable
              key={`${price}-${i}`}
              group={price.group}
              price={price.price}
              background={i % 2 === 0}
            />
          ))}
        </Prices>
        <div
          dangerouslySetInnerHTML={{
            __html: content.business_announcement.html,
          }}
        ></div>
        <Subtitle>{content.allowances_title}</Subtitle>
        <div
          dangerouslySetInnerHTML={{ __html: content.allowances_text.html }}
        ></div>
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
      </ContentWrapper>
    </main>
  )
}

const Title = styled.h1`
  ${textStyles.pageTitle};
`

const Subtitle = styled.h1`
  ${textStyles.title};
  margin-top: 56px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-top: 72px;
  }
`

const Prices = styled.div`
  margin-bottom: 28px;
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
  query tarievenvergoedingenpage {
    prismicPrijzenEnVergoedingen {
      data {
        title
        text {
          html
        }
        prices {
          group
          price
        }
        business_announcement {
          html
        }
        allowances_title
        allowances_text {
          html
        }
        partner_logos {
          partner_logo {
            alt
            url
          }
          url
          size
        }
      }
    }
  }
`

export default TarievenVergoedingenPage
