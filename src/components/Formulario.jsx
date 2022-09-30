import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import {useSelectMoneda} from '../hooks/useSelectMoneda'
import { monedas } from '../data/monedas'
import { Error } from './Error'

const Input = styled.input`
    text-transform: uppercase;
    color: #FFF;
    padding: 10px 0;
    width: 100%;
    border-radius: 5px;
    background-color: #9497FF;
    font-weight: 700;
    font-size: 20px;
    border: none;
    margin-bottom: 20px;
    transition: background-color .3s ease;
    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
    @media (min-width: 992px) {
        margin-bottom: 0;
    }
`

export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]) 
    const [moneda, SelectMoneda] = useSelectMoneda('Elije tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMoneda('Elije tu Criptomoneda', criptos)
    const [error, setError] = useState(false)

     useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const {Data} = await respuesta.json()
            
            const arrayCryptos = Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCryptos)
        }

        consultarApi()
     }, [])

     const handleSubmit = e => {
        e.preventDefault()

        if(!moneda || !criptomoneda) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
     }

  return (
    <>
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <SelectMoneda />
            <SelectCriptomoneda />
            <Input type="submit" value='Cotizar' />
            
        </form>
    </>
  )
}
