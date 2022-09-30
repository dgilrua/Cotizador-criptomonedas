import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Resultado } from "./components/Resultado"
import { Spiner } from "./components/Spiner"
import imagenCripto from './img/imagen-criptos.png'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
  }
`

const Imagen = styled.img`
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const conversionMoneda = async () => {
        setCargando(true)
        setCotizacion({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptomoneda}&tsyms=${monedas.moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[monedas.criptomoneda][monedas.moneda])

        setCargando(false)
      }
  
      conversionMoneda()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={imagenCripto} alt='Imagen criptomoneda' />
      <div>
        <Heading>Cotixa criptomonedas al instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />
        {cargando && <Spiner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App
 