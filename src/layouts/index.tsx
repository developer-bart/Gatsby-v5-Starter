import React, { ReactNode } from 'react'
import styled, { ThemeProvider, css } from 'styled-components'

// Styling
import GlobalStyle from '../styles/'
import theme from '../styles/theme'
import textStyles from '../styles/textStyles'

// Components
import Navigation from '../components/Navigation'

interface IProps {
  children: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700"
    />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  </>
)

const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.astronaut};
    font-family: ${theme.fonts.primary};

    a {
      position: relative;
      color: ${theme.colors.curiousBlue};
      text-decoration: none;

      :after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        transform: scale(0);
        transition: transform ${theme.animations.slowTransition};
        background-color: ${theme.colors.curiousBlue};
        content: '';
      }

      :hover:after {
        transform: scale(1);
      }
    }

    p {
      ${textStyles.body};
    }
  `}
`

export default Layout
