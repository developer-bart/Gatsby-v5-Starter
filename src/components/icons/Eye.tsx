import React from 'react'

// Types
import { IIconProps } from './Icon'

const Eye = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636C20.118 13.473 16.806 17 12.015 17c-4.42 0-7.93-3.536-9.478-5.407C4.03 9.946 7.354 7 12.015 7zm0-2C4.446 5 0 11.551 0 11.551S4.835 19 12.015 19C19.748 19 24 11.551 24 11.551S19.709 5 12.015 5zM12 8a4 4 0 100 8 4 4 0 000-8zm-.004 3.999a1.446 1.446 0 11-2.044-2.046 1.446 1.446 0 012.044 2.046z" />
  </svg>
)

export default Eye
