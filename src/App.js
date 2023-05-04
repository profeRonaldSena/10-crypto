import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'

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

export default function App() {
 return (
  <DIV>
   <div>
    <IMAGEN src={imagen} alt='imagen de criptomonedas' />
   </div>
   <div></div>
  </DIV>
 )
}
