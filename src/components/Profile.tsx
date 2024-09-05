import React from 'react'
import styled from 'styled-components'

// Styling
import textStyles from '../styles/textStyles'

interface IProps {
  name: string
  text: string
  image: string
}

const Profile = ({ name, text, image }: IProps) => (
  <Container>
    <One>
      <Image src={image} alt={name} />
    </One>
    <Two>
      <Title>{name}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Two>
  </Container>
)

const Container = styled.div`
  flex-direction: column;
  display: flex;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    flex-direction: row;
  }
`
const One = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 33.33333%;
    margin-right: 24px;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 240px;
  margin-bottom: 8px;
  border-radius: 4px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 16px;
  }
`

const Two = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 66.66666%;
  }
`

const Title = styled.h2`
  ${textStyles.title};
`

const Text = styled.div`
  p:last-child {
    margin-bottom: 0;
  }
`

export default Profile
