import React from 'react'

// Types
import { IIconProps } from './Icon'

const Human = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 46.98 57.876"
    fill={color}
  >
    <path
      d="M23.441 41.058c-2.108.024-3.4 1.993-4.4 3.576a614.849 614.849 0 01-6.47 10.073c-.694 1.056-1.446 1.91-2.711 1.919a2.02 2.02 0 01-1.728-2.813c1.626-3.423 8.685-15.739 8.685-26.1 0-3.587-1.908-4.448-4.448-4.448h-8.9a2.224 2.224 0 010-4.448h40.037a2.224 2.224 0 110 4.448h-8.9c-2.538 0-4.448.861-4.448 4.448 0 10.359 7.061 22.676 8.687 26.1a2.02 2.02 0 01-1.728 2.813c-1.265-.009-2.019-.863-2.711-1.919-2-3.042-4.323-6.659-6.472-10.073-1-1.595-2.309-3.583-4.448-3.576zM23.49 1.25a6.672 6.672 0 11-6.672 6.672A6.673 6.673 0 0123.49 1.25"
      fill="none"
      stroke={color}
      strokeWidth={3.5}
    />
  </svg>
)

export default Human
