import React from 'react'
import styled from 'styled-components'

function CartTopSide() {
  return (
    <Wrapper>
      <Title>Tubos de oxigeno</Title>
      <Subtitle>Codigo</Subtitle>
      <Brand>Marca</Brand>
      <Price>$us 250.00</Price>
    </Wrapper>
  )
}

export default CartTopSide

export const Wrapper = styled.div`
  align-items: center;
`
export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #eeeeee;
`

export const Subtitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #c1bbbb;
`

export const Brand = styled.h4`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #e8d4d4;
`

export const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: #f0cd15;
`
