import React from 'react'

// Types
import { IIconProps } from './Icon'

const Warning = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.31 7.526A1.36 1.36 0 0112.038 6a1.29 1.29 0 011.28 1.451l-.757 6.053a.566.566 0 01-1.123 0l-.748-5.978zM12 18.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
  </svg>
)

export default Warning
