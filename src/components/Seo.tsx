import React, { ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface IProps {
  title?: string
  description?: string
  lang?: 'nl' | 'en'
  children?: ReactNode
}

const Seo = ({ title, description, lang = 'nl' }: IProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title: defaultTitle, description: defaultDescription } =
    data.site.siteMetadata

  return (
    <>
      <html lang={`nl-${lang}`} />
      <title>{title ?? defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <meta
        property="og:description"
        content={description ?? defaultDescription}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta
        name="twitter:description"
        content={description ?? defaultDescription}
      />
    </>
  )
}

export default Seo
