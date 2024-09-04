import React from 'react'

// Types
import { IIconProps } from './Icon'

const SpeechBubbleSingle = ({
  width,
  height,
  color,
  className,
}: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872C2 6.592 6.486 3 12 3zm0-2C5.662 1 0 5.226 0 11.007c0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961C24 5.195 18.299 1 12 1zm0 14H7v-1h5v1zm5-3H7v-1h10v1zm0-3H7V8h10v1z" />
  </svg>
)

export default SpeechBubbleSingle
