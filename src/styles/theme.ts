const theme = {
  colors: {
    curiousBlue: '#36A1D6',
    astronaut: '#295170',
    white: '#FFFFFF',
    grey: '#D7DAE5',
    nepal: '#5f7d94',
  },
  fonts: {
    // eslint-disable-next-line quotes
    primary: "'Montserrat', sans-serif",
  },
  sizes: {
    S: 450,
    M: 768,
    L: 1024,
  },
  animations: {
    fastTransition: '240ms ease-in-out',
    slowTransition: '320ms ease-in-out',
  },
}

export interface ITheme {
  colors: typeof theme.colors
  fonts: typeof theme.fonts
  sizes: typeof theme.sizes
  animations: typeof theme.animations
}

export default theme as ITheme
