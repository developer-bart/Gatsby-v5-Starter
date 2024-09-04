import React from 'react'

// Types
import { IIconProps } from './Icon'

const Picture = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M17.676 15.54c-1.433-.331-2.767-.621-2.121-1.841C17.521 9.986 16.076 8 14 8c-2.117 0-3.527 2.062-1.555 5.699.665 1.227-.719 1.517-2.121 1.841-1.432.331-1.322 1.087-1.322 2.46h9.996c0-1.373.11-2.129-1.322-2.46zM5 4.019V24h18V4.019H5zM21 20H6.954V6H21v14zM20 0v2H3v19H1V0h19z" />
  </svg>
)

export default Picture
