import styled from 'styled-components'

interface IContentWrapper {
  size: string
}

const ContentWrapper = styled.div<IContentWrapper>`
  box-sizing: border-box;
  width: 100%;
  ${(props) => props.size === 'full' && 'max-width: 1260px'};
  ${(props) => props.size === 'text' && 'max-width: 920px'};
  ${(props) => props.size === 'auto' && 'max-width: 100%'};
  margin: 0 auto;
  padding: 48px 16px 96px;

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    padding: 64px 32px 128px;
  }
`

export default ContentWrapper
