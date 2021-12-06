import React from 'react'
import Img from '../atoms/Img'
import CartTopSide from '../molecules/CartTopSide'
import styled from 'styled-components'

function CardTop() {
  return (
    <Wrapper>
      <Img />
      <CartTopSide />
    </Wrapper>
  )
}

export default CardTop

export const Wrapper = styled.div`
  font-weight: bold;
  display: flex;
`
