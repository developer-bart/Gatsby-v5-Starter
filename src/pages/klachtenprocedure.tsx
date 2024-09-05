import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IComplaintsPageData } from '../types/data'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'

const ComplaintsPage = ({ data }: any) => {
  const content: IComplaintsPageData = data.prismicComplaints.data
  return (
    <main>
      <SEO title="Klachtenprocedure" />
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
`

export const query = graphql`
  query complaintspage {
    prismicComplaints {
      data {
        text {
          html
        }
        title
      }
    }
  }
`

export default ComplaintsPage
