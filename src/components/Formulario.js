import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'

const INPUT = styled.input`
 margin-top: 20px;
 font-weight: bold;
 font-size: 20px;
 padding: 10px;
 background-color: #66a2fe;
 border: none;
 width: 100%;
 border-radius: 10px;
 color: #fff;
 transition: background-color 0.3s ease;
 &:hover {
  background-color: #326ac0;
  cursor: pointer;
 }
`
const Formulario = () => {
 // useMoneda
 const [moneda, setMoneda, SelectMoneda] = useMoneda('')
 return (
  <form>
   <SelectMoneda />
   <INPUT type='submit' value='calcular' />
  </form>
 )
}

export default Formulario
