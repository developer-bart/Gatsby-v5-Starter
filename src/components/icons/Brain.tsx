import React from 'react'

// Types
import { IIconProps } from './Icon'

const Brain = ({ width, height, color, className }: IIconProps) => (
  <svg
    className={className}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
    }}
    viewBox="0 0 24 24"
    fill={color}
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M10.865 17.097c-2.289.805-5.172-.535-5.755-2.756C2.232 14.336.024 12.933 0 10.455-.038 6.424 4.516 1.007 12 1c7.485-.007 11.996 5.312 12 10.329.004 5.017-4.182 6.897-7.607 6.263-.364 1.507-.171 3.578.232 4.747L14.516 23c-.813-2.788-2.2-4.967-3.651-5.903zm-.692-9.276A2.001 2.001 0 0111 4a2 2 0 011.86 2.738c1.214.911 2.405 1.855 3.599 2.794A2.5 2.5 0 1118 14a2.502 2.502 0 01-2.426-1.895c-1.201.098-2.404.173-3.606.254a2 2 0 11-2.178-2.348c.121-.731.252-1.46.383-2.19zm2.06-.246a1.993 1.993 0 01-1.058.417l-.363 2.18a2.01 2.01 0 011.08 1.177l3.647-.289a2.46 2.46 0 01.262-.749l-3.568-2.736z" />
  </svg>
)

export default Brain
