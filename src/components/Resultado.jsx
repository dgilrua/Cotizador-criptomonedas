import styled from "@emotion/styled"

const Contenido = styled.div `
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px

`

const Precio = styled.p `
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Texto = styled.p `
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Img = styled.img `
    display: block;
    width: 150px
`

export const Resultado = ({cotizacion}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = cotizacion

  return (
    <Contenido>
        <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto en el dia de hoy es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo en el dia de hoy es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas es de: <span>{CHANGEPCT24HOUR}</span>%</Texto>
        </div>
    </Contenido>
  )
}
