import React from 'react'
import Photo from '../../assets/png/imagen1.png'
import styled from 'styled-components'

function Img() {
  return (
    <div>
      <Image src={Photo} alt='image' />
    </div>
  )
}

export default Img

export const Image = styled.img`
  max-width: 90%;
  border-radius: 10px;
`
