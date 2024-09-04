import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

// Styling
import textStyles from '../styles/textStyles'

// Components
import Logo from './Logo'

interface IState {
  activeMobileMenu: boolean
}

class Navigation extends PureComponent<{}, IState> {
  public state = {
    activeMobileMenu: false,
  }

  public toggleMobileMenu = () => {
    this.setState({ activeMobileMenu: !this.state.activeMobileMenu })
  }

  public deactivateMobileMenu = () => {
    if (this.state.activeMobileMenu === true) {
      this.setState({ activeMobileMenu: false })
    }
  }

  public render() {
    const { activeMobileMenu } = this.state
    return (
      <Nav>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Links active={activeMobileMenu}>
          <NavLink
            to="/"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/indicaties-en-werkwijze"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Indicaties & Werkwijze
          </NavLink>
          <NavLink
            to="/oncologie"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Oncologie
          </NavLink>
          <NavLink
            to="/tarieven-en-vergoedingen"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Tarieven & vergoedingen
          </NavLink>
          <NavLink
            to="/voorstellen"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Voorstellen
          </NavLink>
          <NavLink
            to="/contact"
            onClick={this.deactivateMobileMenu}
            activeClassName="active"
          >
            Contact
          </NavLink>
        </Links>
        <Hamburger
          onClick={this.toggleMobileMenu}
          menuActive={activeMobileMenu}
        >
          <HamburgerBox>
            <HamburgerInner active={activeMobileMenu} />
          </HamburgerBox>
        </Hamburger>
      </Nav>
    )
  }
}

const MENU_BREAKPOINT = 1250

const Nav = styled.nav`
  ${textStyles.bodySmall};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 56px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.sizes.M}px) {
    height: 64px;
    padding: 16px 24px;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  margin-right: 16px;

  :after {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  padding: 4px 0;
  transition: color ${({ theme }) => theme.animations.fastTransition};
  color: ${({ theme }) => theme.colors.astronaut};
  text-decoration: none;

  @media (max-width: ${MENU_BREAKPOINT}px) {
    margin-bottom: 32px;
    opacity: 0;
    transform: translateY(16px);
    font-size: 18px;

    :last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${MENU_BREAKPOINT}px) {
    margin-right: 24px;

    :last-child {
      margin-right: 0;
    }
  }

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scale(0);
    transition: transform ${({ theme }) => theme.animations.slowTransition};
    background-color: ${({ theme }) => theme.colors.curiousBlue};
    content: '';
  }

  &.active {
    color: ${({ theme }) => theme.colors.curiousBlue};
  }

  :hover {
    color: ${({ theme }) => theme.colors.curiousBlue};

    :after {
      transform: scale(1);
    }
  }
`

interface ILinks {
  active: boolean
}

const Links = styled.div<ILinks>`
  @keyframes fadeInUp {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: ${MENU_BREAKPOINT}px) {
    background-color: ${({ theme }) => theme.colors.white};
    pointer-events: none;
    z-index: 1;
    box-sizing: border-box;
    position: fixed;
    top: 56px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 56px);
    padding: 32px;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.animations.slowTransition};

    ${(props: { active: boolean }) =>
      props.active &&
      `
      pointer-events: auto;
      opacity: 1;
    `};

    @media (min-width: ${MENU_BREAKPOINT}px) {
      top: 64px;
      height: calc(100vh - 64px);
    }

    ${NavLink} {
      ${(props: { active: boolean }) =>
        props.active &&
        css`
          :nth-child(1) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 240ms;
          }
          :nth-child(2) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 360ms;
          }
          :nth-child(3) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 480ms;
          }
          :nth-child(4) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 600ms;
          }
          :nth-child(5) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 720ms;
          }
          :nth-child(6) {
            animation: fadeInUp
              ${({ theme }) => theme.animations.fastTransition} forwards;
            animation-delay: 800ms;
          }
        `};
    }
  }

  @media (min-width: ${MENU_BREAKPOINT}px) {
    display: flex;
  }
`

// Hamburger Menu
const HamburgerInnerStyling = css`
  position: absolute;
  width: 32px;
  height: 3px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.astronaut};
`

const HamburgerInner = styled.span`
  ${HamburgerInnerStyling};
  top: 50%;
  display: block;
  margin-top: -2px;
  transition: background-color ${({ theme }) => theme.animations.fastTransition};
  ${(props: { active: boolean }) =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
    `};

  @keyframes mobileMenuTopIn {
    60% {
      transform: translateY(9px);
    }

    100% {
      transform: translateY(9px) rotate(-45deg);
    }
  }

  @keyframes mobileMenuTopOut {
    0% {
      transform: translateY(9px) rotate(-45deg);
    }

    40% {
      transform: translateY(9px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  @keyframes mobileMenuBottomIn {
    60% {
      transform: translateY(-9px);
    }

    100% {
      transform: translateY(-9px) rotate(45deg);
    }
  }

  @keyframes mobileMenuBottomOut {
    0% {
      transform: translateY(-9px) rotate(45deg);
    }

    40% {
      transform: translateY(-9px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  :before,
  &:after {
    ${HamburgerInnerStyling};
    display: block;
    transition: background-color
      ${({ theme }) => theme.animations.fastTransition};
    content: '';
  }

  :before {
    top: -9px;
    animation: mobileMenuTopOut 0.32s ease-in-out forwards;
  }

  &:after {
    bottom: -9px;
    animation: mobileMenuBottomOut 0.32s ease-in-out forwards;
  }

  ${(props) =>
    props.active &&
    `
    :before {
      animation: mobileMenuTopIn 0.32s ease-in-out forwards;
    }

    :after {
      animation: mobileMenuBottomIn 0.32s ease-in-out forwards;
    }
  `};
`

const Hamburger = styled.button<{ menuActive: boolean }>`
  z-index: 1;
  display: flex;
  min-height: 20px;
  margin: 0;
  padding: 8px 0;
  border: 0;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  transition-timing-function: linear;
  background-color: transparent;
  cursor: pointer;

  :hover {
    ${HamburgerInner} {
      background-color: ${({ theme }) => theme.colors.curiousBlue};
    }
    ${HamburgerInner}:before {
      background-color: ${({ theme }) => theme.colors.curiousBlue};
    }
    ${HamburgerInner}:after {
      background-color: ${({ theme }) => theme.colors.curiousBlue};
    }
  }

  ${(props) =>
    props.menuActive &&
    `
    :hover ${HamburgerInner} {
      background-color: ${props.theme.colors.white}
    }
  `}

  @media (min-width: ${MENU_BREAKPOINT}px) {
    display: none;
  }
`

const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
`
export default Navigation
