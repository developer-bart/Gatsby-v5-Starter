import React from 'react'
import styled from 'styled-components'

// Types
import { ITestimonial } from '../types/data'

// Styling
import textStyles from '../styles/textStyles'

// Components
import IconComponent from './icons/Icon'

type ISize = 'small' | 'large'

interface IProps {
  testimonial: ITestimonial
  size?: ISize
  iconColor?: string
  className?: string
}

const Testimonial = ({
  testimonial,
  size = 'small',
  iconColor,
  className,
}: IProps) => (
  <Container className={className} size={size}>
    <Icon icon="quote" color={iconColor} width={20} height={20} size={size} />
    <Text size={size}>{testimonial.testimonial}</Text>
    <Author>- {testimonial.name}</Author>
  </Container>
)

const Container = styled.div`
  flex-direction: column;
  display: flex;
  ${(props: { size: ISize }) =>
    props.size === 'large' && 'text-align: center;'};
`

const Icon = styled(IconComponent)`
  margin: ${(props: { size: ISize }) =>
    props.size === 'large' ? '0 auto 8px' : '0 0 8px'};
`

const Text = styled.p`
  margin-bottom: 8px;
  ${(props: { size: ISize }) => props.size === 'large' && textStyles.bodyLarge};
`

const Author = styled.span`
  display: block;
  font-weight: 700;
`

export default Testimonial
