import React from 'react'
import styled from 'styled-components'

// Types
import { ITracks } from '../types/data'

// Styling
import theme from '../styles/theme'
import textStyles from '../styles/textStyles'

// Components
import Icon from './icons/Icon'

interface IProps {
  data: ITracks
}

const TrackCard = ({ data }: IProps) => (
  <Container>
    <Icon
      icon={data.track_icon}
      width={40}
      height={40}
      color={theme.colors.white}
    />
    <Title>{data.track_title}</Title>
    <Text dangerouslySetInnerHTML={{ __html: data.track_text.html }} />
  </Container>
)

const Container = styled.div`
  width: 100%;
  padding: 24px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.curiousBlue};
  border-radius: 4px;
`

const Title = styled.h3`
  ${textStyles.subtitle};
`

const Text = styled.div`
  > p {
    ${textStyles.bodySmall};

    :last-child {
      margin-bottom: 0;
    }
  }
`

export default TrackCard
