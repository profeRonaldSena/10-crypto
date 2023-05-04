import { useState } from 'react'
import styled from '@emotion/styled'

const LABEL = styled.label`
 font-family: 'Bebas Neue', cursive;
 color: #fff;
 text-transform: uppercase;
 font-weight: bold;
 font-size: 2.4rem;
 margin-top: 2rem;
 display: block;
`
const SELECT = styled.select`
 width: 100%;
 display: block;
 padding: 1rem;
 -webkit-appearance: none;
 border-radius: 10px;
 border: none;
`

const useMoneda = (label, stateInitial, MONEDAS) => {
 // useState
 const [state, setState] = useState(stateInitial)
 const Seleccionar = () => (
  <>
   <LABEL>Elije tu Moneda</LABEL>
   <SELECT onChange={(e) => setState(e.target.value)} value={state}>
    <option value=''>- Seleccione -</option>
    {MONEDAS.map((MONEDA) => (
     <option key={MONEDA.codigo} value={MONEDA.codigo}>
      {MONEDA.nombre}
     </option>
    ))}
   </SELECT>
  </>
 )
 return [state, setState, Seleccionar]
}

export default useMoneda
