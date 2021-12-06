import React from 'react'
import styled from 'styled-components'

function SubHeader() {
  return (
    <Wrapper>
      <P>Promociones </P>
      <P2>Diciembre 2021</P2>
    </Wrapper>
  )
}

export default SubHeader

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: #222831;
  backdrop-filter: blur(12px);
`
export const P = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #c4c4c4;
`
export const P2 = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #59555d;
`
