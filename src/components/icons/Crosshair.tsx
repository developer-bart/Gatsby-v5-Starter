import React from 'react'

// Types
import { IIconProps } from './Icon'

const Crosshair = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 21.949V17h-2v4.949c-4.717-.47-8.479-4.232-8.949-8.949H7v-2H2.051C2.521 6.283 6.283 2.521 11 2.051V7h2V2.051c4.717.471 8.479 4.232 8.949 8.949H17v2h4.949c-.47 4.717-4.232 8.479-8.949 8.949z" />
  </svg>
)

export default Crosshair
