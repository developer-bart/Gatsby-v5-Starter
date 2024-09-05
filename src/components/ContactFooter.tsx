import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'

interface IItems {
  label: string
  url?: string
}

interface IProps {
  items: IItems[]
  className?: string
}

const ContactFooter = ({ items, className }: IProps) => (
  <Container className={className}>
    {items.map((item, i) => {
      const lastItem = i === items.length - 1
      if (item.url) {
        return (
          <Wrapper key={i}>
            <StyledLink key={i} to={item.url} rel="noopener noreferrer">
              {item.label}
            </StyledLink>
            <Dot lastItem={lastItem} />
          </Wrapper>
        )
      } else {
        return (
          <Wrapper key={i}>
            <Item key={i}>{item.label}</Item>
            <Dot lastItem={lastItem} />
          </Wrapper>
        )
      }
    })}
  </Container>
)

const Container = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const Wrapper = styled.div`
  display: flex;
  margin-right: 12px;
  margin-bottom: 12px;
`

const Dot = styled.div`
  display: flex;
  align-items: center;
  width: 4px;
  height: 100%;
  margin-left: 12px;

  ${(props: { lastItem: boolean }) =>
    props.lastItem &&
    `
    display: none;
  `};

  :before {
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.astronaut};
    content: '';
  }
`

const Styling = css`
  ${textStyles.bodySmall};
  margin-bottom: 0;
`

const Item = styled.span`
  ${Styling};
`

const StyledLink = styled(Link)`
  ${Styling}
`

export default ContactFooter
