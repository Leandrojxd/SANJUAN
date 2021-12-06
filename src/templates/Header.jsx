import React from 'react'
import PreHeader from '../components/molecules/PreHeader'
import Logo from '../components/atoms/Logo'
import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
      <PreHeader />
      <Logo />
    </Wrapper>
  )
}

export default Header

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
`
