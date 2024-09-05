import React from 'react'
import styled from 'styled-components'

// Styling
import textStyles from '../styles/textStyles'

interface IProps {
  title: string
  addressLineOne: string
  addressLineTwo: string
  mapUrl: string
  className?: string
}

const AddressBlock = ({
  title,
  addressLineOne,
  addressLineTwo,
  mapUrl,
  className,
}: IProps) => (
  <Container className={className}>
    <Title>{title}</Title>
    <LineOne>{addressLineOne}</LineOne>
    <LineTwo>{addressLineTwo}</LineTwo>
    <a href={mapUrl} target="_blank" rel="noopener noreferrer">
      Routebeschrijving
    </a>
  </Container>
)

const Container = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
`

const Title = styled.h2`
  ${textStyles.title};
  margin-bottom: 16px;
`

const LineOne = styled.div`
  margin-bottom: 4px;
`

const LineTwo = styled.div`
  margin-bottom: 4px;
`

export default AddressBlock
