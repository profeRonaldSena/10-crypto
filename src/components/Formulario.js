import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'

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
 // monedas
 const MONEDAS = [
  { codigo: 'USD', nombre: 'Dolar Estados Unidos' },
  { codigo: 'EUR', nombre: 'Euro' },
  { codigo: 'GBP', nombre: 'Libra Esterlina' },
  { codigo: 'MXN', nombre: 'Peso Mexicano' },
  { codigo: 'COP', nombre: 'Peso Colombiano' },
 ]
 // useHooks
 const [moneda, setMoneda, SelectMoneda] = useMoneda(
  'Elige tu Moneda',
  '',
  MONEDAS
 )
 const [crypto, setCrypto, SelectCrypto] = useCriptomoneda(
  'Elige tu Criptomoneda',
  ''
 )
 return (
  <form>
   <SelectCrypto />
   <SelectMoneda />
   <INPUT type='submit' value='calcular' />
  </form>
 )
}

export default Formulario
