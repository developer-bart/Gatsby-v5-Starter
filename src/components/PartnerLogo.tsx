import React from 'react'
import styled from 'styled-components'

type ISize = 'normal' | 'small'

interface IProps {
  image: string
  alt: string
  url: string
  size?: ISize
  className?: string
}

const PartnerLogo = ({
  image,
  alt,
  url,
  size = 'normal',
  className,
}: IProps) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    <Img src={image} alt={alt} size={size} />
  </Link>
)

const Link = styled.a`
  :after {
    display: none;
  }
`

const Img = styled.img`
  display: block;
  margin-bottom: 0;
  max-height: ${(props: { size: ISize }) =>
    props.size === 'small' ? '40px' : '56px'};
`

export default PartnerLogo
