import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IWayOfWorkingAndTracksData } from '../types/data'
import { IIconType } from '../components/icons/Icon'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'
import Tag from '../components/Tag'
import TracksOverview from '../components/TracksOverview'
import Methodology from '../components/Methodology'
import CTA from '../components/CTA'

interface IProps {
  data: any
}

const WerkwijzeTrajectenPage = ({ data }: IProps) => {
  const content: IWayOfWorkingAndTracksData =
    data.prismicWerkwijzeEnTrajecten.data
  return (
    <main>
      <SEO title="Werkwijze en trajecten" />
      <ContentWrapper size="text">
        <Title>{content.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: content.intro.html }}></div>
        <TagWrapper>
          {content.indications.map((item, i) => (
            <Tag key={i}>{item.indication}</Tag>
          ))}
        </TagWrapper>
        <Paragraph>
          <Subtitle>{content.intake_title}</Subtitle>
          <div
            dangerouslySetInnerHTML={{ __html: content.intake_text.html }}
          ></div>
        </Paragraph>
        <Paragraph>
          <Subtitle>{content.tracks_title}</Subtitle>
          <div
            dangerouslySetInnerHTML={{ __html: content.tracks_text.html }}
          ></div>
          <TracksOverview cards={content.tracks} />
        </Paragraph>
        <Subtitle>{content.methodologies_title}</Subtitle>
        <div
          dangerouslySetInnerHTML={{ __html: content.methodologies_text.html }}
        ></div>
        <Methodologies>
          {content.methodologies.map((methodology, i) => (
            <Methodology
              key={`${methodology.methodology_title}-${i}`}
              title={methodology.methodology_title}
              icon={methodology.methodology_icon as IIconType}
            />
          ))}
        </Methodologies>
        <CTA />
      </ContentWrapper>
    </main>
  )
}

const Paragraph = styled.div`
  margin-bottom: 56px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 72px;
  }

  h3 {
    ${textStyles.subtitle};
  }
`

const Title = styled.h1`
  ${textStyles.pageTitle};
`

const Subtitle = styled.h2`
  ${textStyles.title};
`

const TagWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-bottom: calc(56px - 16px);

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: calc(72px - 16px);
  }

  > h3 {
    margin-right: 8px;
  }
`

const Methodologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 56px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 64px;
  }

  > div {
    width: 100%;
    margin-bottom: 32px;

    @media (min-width: ${({ theme }) => theme.sizes.M}px) {
      width: calc(50% - 12px);
      margin-right: 24px;

      :nth-child(2n + 2) {
        margin-right: 0;
      }
    }

    @media (min-width: ${({ theme }) => theme.sizes.L}px) {
      width: calc(33.33333% - 16px);

      :nth-child(2n + 2) {
        margin-right: 24px;
      }

      :nth-child(3n + 3) {
        margin-right: 0;
      }
    }
  }
`

export const query = graphql`
  query werkwijzetrajectenpage {
    prismicWerkwijzeEnTrajecten {
      id
      data {
        title
        intro {
          html
        }
        indications {
          indication
        }
        intake_title
        intake_text {
          html
        }
        tracks_title
        tracks_text {
          html
        }
        tracks {
          track_icon
          track_title
          track_text {
            html
          }
        }
        methodologies_title
        methodologies_text {
          html
        }
        methodologies {
          methodology_icon
          methodology_title
        }
      }
    }
  }
`

export default WerkwijzeTrajectenPage
