import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <ContentWrapper size="text">
      <Title>Pagina niet gevonden</Title>
      <p>Sorry, deze pagina is niet (meer) beschikbaar...</p>
      <p>
        Ga terug naar de <Link to="/">homepage</Link>.
      </p>
    </ContentWrapper>
  </>
)

const Title = styled.h1`
  ${textStyles.pageTitle};
`

export default NotFoundPage
