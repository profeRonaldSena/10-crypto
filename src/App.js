import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'

const DIV = styled.div`
 max-width: 900px;
 margin: 0 auto;
 @media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
 }
`
const IMAGEN = styled.img`
 max-width: 100%;
 margin-top: 5rem;
`
const H1 = styled.h1`
 font-family: 'Bebas Neue', cursive;
 color: #fff;
 text-align: left;
 font-weight: 700;
 font-size: 50px;
 margin-bottom: 50px;
 margin-top: 80px;
 &::after {
  content: '';
  width: 100%;
  height: 6px;
  background-color: #66a2fe;
  display: block;
 }
`

export default function App() {
 return (
  <DIV>
   <div>
    <IMAGEN src={imagen} alt='imagen de criptomonedas' />
   </div>
   <div>
    <H1>Cotizar Criptomonedas</H1>
    <Formulario />
   </div>
  </DIV>
 )
}
