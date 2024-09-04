import { css } from 'styled-components'

// Text styles
export default {
  pageTitle: css`
    margin: 0 0 24px;
    font-size: 39px;
    font-weight: 700;
    line-height: 1.125;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
    }
  `,
  title: css`
    margin: 0 0 16px;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.125;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
      margin-botton: 24px;
      font-size: 31px;
    }
  `,
  subtitle: css`
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.125;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
      margin-botton: 24px;
      font-size: 20px;
    }
  `,
  bodyLarge: css`
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
      font-size: 20px;
    }
  `,
  body: css`
    margin: 0 0 28px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
      font-size: 18px;
    }
  `,
  bodySmall: css`
    margin: 0 0 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: ${({ theme }) => theme.sizes.S}px) {
      font-size: 49px;
      font-size: 16px;
    }
  `,
}
