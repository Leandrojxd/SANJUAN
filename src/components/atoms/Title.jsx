import React from 'react'
import styled from 'styled-components'
import { Header } from '../../data/Data.js'

function Title() {
  return (
    <div>
      <HeaderTitle>{Header.title}</HeaderTitle>
    </div>
  )
}

export default Title

export const HeaderTitle = styled.h2`
  margin: 0;
  padding-top: 40px;
  font-weight: bold;
  font-size: 30px;
  line-height: 98.5%;
  color: #59555e;
`
