import React from 'react'
import styled from 'styled-components'

// Types
import { ITracks } from '../types/data'

// Components
import TrackCard from './TrackCard'

interface IProps {
  cards: ITracks[]
}

const TracksOverview = ({ cards }: IProps) => (
  <Container>
    {cards.map((card, i) => (
      <TrackCard key={i} data={card} />
    ))}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.sizes.S}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  > div {
    box-sizing: border-box;
    min-width: 100%;
    margin-bottom: 16px;

    :last-child {
      margin-bottom: 0;
    }

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      min-width: calc(50% - 8px);
      width: calc(50% - 8px);
      margin-right: 16px;

      :nth-child(2) {
        margin-right: 0;
      }
    }

    @media (min-width: ${({ theme }) => theme.sizes.M}px) {
      min-width: calc(33.33333% - 11px);
      width: calc(33.33333% - 11px);
      margin-right: 16px;
      margin-bottom: 0;

      :nth-child(2) {
        margin-right: 16px;
      }
      :last-child {
        margin-right: 0;
      }
    }
  }
`

export default TracksOverview
