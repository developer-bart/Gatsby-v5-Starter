import { css } from 'styled-components'

const Button = css`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: inline-block;
    padding: 8px 16px;
    border: 2px solid ${theme.colors.white};
    transition: color ${theme.animations.fastTransition},
      background-color ${theme.animations.fastTransition};
    border-radius: 24px;
    background-color: transparent;
    color: ${theme.colors.white} !important;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    font-weight: 500;

    :hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.curiousBlue} !important;
    }

    :after {
      display: none;
    }
  `}
`

export default Button
