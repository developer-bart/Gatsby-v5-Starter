import React from 'react'
import styled, { css } from 'styled-components'

// Types
import { IPrices } from '../types/data'

type IProps = IPrices & {
  background: boolean
}

const PriceTable = ({ group, price, background }: IProps) => (
  <Container background={background}>
    <Row>{group}</Row>
    <Row>{price}</Row>
  </Container>
)

const Container = styled.div`
  display: flex;

  ${({ background }: { background: boolean }) =>
    background &&
    css`
      background-color: ${({ theme }) => theme.colors.grey};
    `};
`

const Row = styled.div`
  width: 50%;
  padding: 12px;
`

export default PriceTable
