import React from 'react'

// Types
import { IIconProps } from './Icon'

const Quote = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M13 14.725C13 9.584 16.892 4.206 23 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0 1 24 16.021C24 19.203 21.416 21 18.801 21 15.786 21 13 18.695 13 14.725zm-13 0C0 9.584 3.892 4.206 10 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0 1 11 16.021C11 19.203 8.416 21 5.801 21 2.786 21 0 18.695 0 14.725z" />
  </svg>
)

export default Quote
