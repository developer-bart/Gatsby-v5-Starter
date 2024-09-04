import React from 'react'

// Types
import { IIconProps } from './Icon'

const IdCard = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M22 8v12H6V8h16zm2-2H4v16h20V6zm-8 11.677V18H8v-.333c-.004-.89.035-1.398 1.059-1.634 1.123-.259 2.23-.491 1.697-1.473C9.179 11.649 10.307 10 12 10c1.662 0 2.816 1.588 1.244 4.56-.518.976.551 1.208 1.697 1.473 1.028.237 1.063.748 1.059 1.644zM20 10h-3v2h3v-2zm0 3h-3v2h3v-2zm0 3h-3v2h3v-2zm2-12H2v16h1V5h19V4zm-2-2H0v16h1V3h19V2z" />
  </svg>
)

export default IdCard
