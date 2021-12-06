import React from 'react'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import styled from 'styled-components'

function Button() {
  return (
    <div>
      <ButtonBase>
        <Img src={Whatsapp} alt='React Logo' />
        Whatsapp
      </ButtonBase>
    </div>
  )
}

export default Button

export const ButtonBase = styled.button`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  background: #393e46;
  border-radius: 1rem;
  padding: 0.5rem 2.2rem;
  border: none;

  /* Font Specs */
  font-family: inherit;
  font-weight: 500;
  font-size: 1.4rem;
  color: #eeeeee;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  /* This disables the default button specs */
  -webkit-appearance: none;
  -moz-appearance: none;
`
export const Img = styled.img`
  padding-right: 15px;
`
