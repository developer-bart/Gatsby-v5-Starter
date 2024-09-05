import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IPrivacyPageData } from '../types/data'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'

const PrivacyPage = ({ data }: any) => {
  const content: IPrivacyPageData = data.prismicPrivacyPolicy.data
  return (
    <main>
      <SEO title="Privacy regelement" />
      <ContentWrapper size="text">
        <Title>{content.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: content.text.html }} />
      </ContentWrapper>
    </main>
  )
}

const Title = styled.h1`
  ${textStyles.pageTitle};
`

const Text = styled.div`
  ${textStyles.body};

  > h2 {
    ${textStyles.subtitle};
  }
`

export const query = graphql`
  query privacypage {
    prismicPrivacyPolicy {
      data {
        text {
          html
        }
        title
      }
    }
  }
`

export default PrivacyPage
