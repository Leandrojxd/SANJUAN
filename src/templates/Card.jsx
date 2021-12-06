import React from 'react'
import CardTop from '../components/organisms/CardTop'
import styled from 'styled-components'
import Desc from '../components/atoms/Desc'
import Button from '../components/atoms/Button'
import { openWhatsapp } from '../utils/functions'

function Card() {
  return (
    <Wrapper>
      <CardTop />
      <Desc />
      <div onClick={() => openWhatsapp()}>
        <Button />
      </div>
    </Wrapper>
  )
}

export default Card

export const Wrapper = styled.div`
  background: #222831;
  border-radius: 15px;
  padding: 7.5% 7.5%;
  margin: 7.5% 5%;
`
