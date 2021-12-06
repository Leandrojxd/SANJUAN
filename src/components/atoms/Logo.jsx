import React from 'react'
import SJLogo from '../../assets/png/logo.png'
import styled from 'styled-components'

function Logo() {
  return (
    <div>
      <Img src={SJLogo} alt='Logo' />
    </div>
  )
}

export default Logo

export const Img = styled.img`
  max-width: 80%;
  padding-top: 40px;
`
