import React from 'react'

// Types
import { IIconProps } from './Icon'

const Coach = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945C10.366 7.177 12.678 4 16 4c3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825H8.003c0-2.196-.176-3.407 2.115-3.936zM.002 20h6.001c-.028-6.542 2.995-3.697 2.995-8.901C8.998 9.09 7.687 8 6 8c-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209C.099 17.392 0 18.12 0 19.381L.002 20z" />
  </svg>
)

export default Coach
