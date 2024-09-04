import React from 'react'

// Types
import { IIconProps } from './Icon'

const Briefcase = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M9 2a2 2 0 00-2 2v2h2V4.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V6h2V4a2 2 0 00-2-2H9zm12 5H3a3 3 0 00-3 3v9a3 3 0 003 3h18a3 3 0 003-3v-9a3 3 0 00-3-3zm-.5 11h-17a.5.5 0 010-1h17a.5.5 0 010 1zm0-3h-17a.5.5 0 010-1h17a.5.5 0 010 1zm0-3h-17a.5.5 0 010-1h17a.5.5 0 010 1z" />
  </svg>
)

export default Briefcase
