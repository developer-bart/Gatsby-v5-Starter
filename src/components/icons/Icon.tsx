import React from 'react'
import iconMap from './IconMap'
import theme from '../../styles/theme'

export type IIconType = keyof typeof iconMap

export interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

export type IProps = IIconProps & {
  icon: IIconType
}

const Icon = ({
  icon,
  width = 16,
  height = 16,
  color = theme.colors.astronaut,
  className,
}: IProps) => {
  const IconComponent = iconMap[icon]
  return (
    <IconComponent
      className={className}
      width={width}
      height={height}
      color={color}
    />
  )
}

export default Icon
