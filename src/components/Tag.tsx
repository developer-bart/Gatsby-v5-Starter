import React, { ReactNode } from 'react'
import styled from 'styled-components'

// Styling
import textStyles from '../styles/textStyles'

interface IProps {
  children: ReactNode
}

const Tag = ({ children }: IProps) => <Container>{children}</Container>

const Container = styled.h3`
  ${textStyles.bodySmall};
  padding: 4px 12px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.nepal};
  word-break: keep-all;
`

export default Tag
