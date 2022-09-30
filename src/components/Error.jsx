import React from 'react'
import styled from '@emotion/styled'

const Si = styled.div`
    background-color: #B7322C;
    padding: 20px 0;
    color: white;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
`

export const Error = () => {
  return (
    <Si>Todos los campos son obligatorios</Si>
  )
}
