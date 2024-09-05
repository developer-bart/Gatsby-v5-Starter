import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// Types
import { IContactPageData } from '../types/data'

// Components
import SEO from '../components/Seo'
import BackgroundImageComponent from '../components/BackgroundImage'
import ContentWrapperComponent from '../components/ContentWrapper'
import ContactBlockComponent from '../components/ContactBlock'
import AddressBlock from '../components/AddressBlock'
import ContactFooter from '../components/ContactFooter'

const ContactPage = ({ data }: any) => {
  const content: IContactPageData = data.prismicContact.data
  return (
    <main>
      <SEO title="Contact" />
      <BackgroundImage
        image={content.background_image.url}
        alt={content.background_image.alt}
      />
      <Content>
        <ContentWrapper size="auto">
          <ContactBlock
            title={content.title}
            text={content.text}
            links={content.links}
          />
          <Addresses>
            {content.addresses &&
              content.addresses.map((address, i) => (
                <AddressBlock
                  key={i}
                  title={address.address_title}
                  addressLineOne={address.address_line_one}
                  addressLineTwo={address.address_line_two}
                  mapUrl={address.map_url}
                />
              ))}
          </Addresses>
          <ContactFooter items={content.footer} />
        </ContentWrapper>
      </Content>
    </main>
  )
}

const BackgroundImage = styled(BackgroundImageComponent)`
  height: 256px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 30vw;
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.sizes.L}px) {
    width: 50vw;
  }
`

const ContentWrapper = styled(ContentWrapperComponent)`
  padding: 48px 16px 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    padding: 64px 32px 64px;
  }
`

const Content = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  min-height: calc(100vh - 56px);
  margin-top: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    width: 70vw;
    min-height: calc(100vh - 64px);
    margin-top: 0;
    margin-left: auto;
  }

  @media (min-width: ${({ theme }) => theme.sizes.L}px) {
    width: 50vw;
  }
`

const ContactBlock = styled(ContactBlockComponent)`
  margin-bottom: 48px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: 64px;
  }
`

const Addresses = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(48px - 24px);

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    margin-bottom: calc(64px - 24px);
  }

  > div {
    margin-right: 32px;
    margin-bottom: 24px;

    :last-child {
      margin-right: 0;
    }
  }
`

export const query = graphql`
  query contactpage {
    prismicContact {
      data {
        addresses {
          address_line_one
          address_line_two
          address_title
          map_url
        }
        footer {
          label
          url
        }
        links {
          label
          url
        }
        text
        title
        background_image {
          url
          alt
        }
      }
    }
  }
`

export default ContactPage
