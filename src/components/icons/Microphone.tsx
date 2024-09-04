import React from 'react'

// Types
import { IIconProps } from './Icon'

const Microphone = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 2c1.103 0 2 .897 2 2v7c0 1.103-.897 2-2 2s-2-.897-2-2V4c0-1.103.897-2 2-2zm0-2a4 4 0 00-4 4v7a4 4 0 008 0V4a4 4 0 00-4-4zm8 9v2a8 8 0 01-16 0V9h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6V9h2zm-7 13v-2h-2v2H7v2h10v-2h-4z" />
  </svg>
)

export default Microphone
