import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <p> Todos los derechos reservados</p>
    </Wrapper>
  )
}

export default Footer

export const Wrapper = styled.section`
  padding: 50px;
  background: #212529;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #c1bbbb;
  text-align: center;
`
