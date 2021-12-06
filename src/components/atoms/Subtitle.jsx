import React from 'react'
import styled from 'styled-components'
import { Header } from '../../data/Data.js'

function Subtitle() {
  return (
    <div>
      <Subheader>{Header.subtitle}</Subheader>
    </div>
  )
}

export default Subtitle

export const Subheader = styled.h3`
  margin: 0;
  padding-top: 10px;
  font-weight: bold;
  font-size: 30px;
  line-height: 98.5%;
  color: #f0cd15;
`
