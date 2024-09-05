import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { ITermsPageData } from '../types/data'

// Styling
import textStyles from '../styles/textStyles'

// Components
import SEO from '../components/Seo'
import ContentWrapper from '../components/ContentWrapper'

const TermsPage = ({ data }: any) => {
  const convertToRoman = (num: number) => {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    } as any
    let result = ''

    Object.keys(roman).forEach((item) => {
      const q = Math.floor(num / roman[item])
      num -= q * roman[item]
      result += item.repeat(q)
    })

    return result
  }

  const content: ITermsPageData = data.prismicTerms.data

  return (
    <main>
      <SEO title="Algemene voorwaarden" />
      <ContentWrapper size="text">
        <Title>{content.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: content.text.html }} />
        {content.chapters.map((chapter, i) => (
          <div key={i}>
            <ChapterTitle>
              <span>{convertToRoman(i + 1)}</span>
              {chapter.chapter_title}
            </ChapterTitle>
            <Chapter
              key={i}
              dangerouslySetInnerHTML={{ __html: chapter.chapter_text.html }}
            />
          </div>
        ))}
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

const ChapterTitle = styled.p`
  ${textStyles.bodySmall};
  margin-top: 48px;
  font-weight: 700;

  > span {
    margin-right: 12px;
  }
`

const Chapter = styled.div`
  ${textStyles.bodySmall};

  > ol {
    list-style-type: upper-roman;
    margin-bottom: 16px;
    margin-left: 40px;
  }

  > ul {
    list-style-type: lower-roman;
    margin-bottom: 16px;
    margin-left: 64px;
  }
`

export const query = graphql`
  query termspage {
    prismicTerms {
      data {
        title
        text {
          html
        }
        chapters {
          chapter_title
          chapter_text {
            html
          }
        }
      }
    }
  }
`

export default TermsPage
