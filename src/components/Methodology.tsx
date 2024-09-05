import React from 'react'
import styled from 'styled-components'

// Types
import { IIconType } from './icons/Icon'

// Styles
import theme from '../styles/theme'
import textStyles from '../styles/textStyles'

// Components
import Icon from './icons/Icon'

interface IProps {
  title: string
  icon?: IIconType
}

const Methodology = ({ title, icon }: IProps) => (
  <Container>
    {icon && (
      <StyledIcon
        icon={icon}
        color={theme.colors.curiousBlue}
        width={32}
        height={32}
      />
    )}
    <Title>{title}</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledIcon = styled(Icon)`
  min-width: 32px;
  margin-right: 12px;
`

const Title = styled.h3`
  ${textStyles.body};
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.curiousBlue};
  font-weight: 400;
`

export default Methodology
