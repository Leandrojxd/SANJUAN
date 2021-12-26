import React from 'react'
import Header from '../templates/Header'
import styled from 'styled-components'
import SubHeader from '../templates/SubHeader'
import Card from '../templates/Card'
import Footer from '../templates/Footer'

function Home() {
  return (
    <Wrapper>
      <Header />
      <SubHeader />
      <P>
        Para mas informacion dele clic en el boton de detalle, o en whatsapp
        para comunicarse con nosotros.
      </P>
      <Card/>
      <Card />
      <Card/>
      <Card/>
      <Card/>
      <Footer />
    </Wrapper>
  )
}

export default Home

export const Wrapper = styled.section`
  background: #212529;
`
export const P = styled.p`
  padding: 20px;
  font-size: 16px;
  line-height: 160%;
  color: #ffffff;
`
