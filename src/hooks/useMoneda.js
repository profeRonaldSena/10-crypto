import { useState } from 'react'

const useMoneda = (label, stateInitial) => {
 // useState
 const [state, setState] = useState(stateInitial)
 const Seleccionar = () => (
  <>
   <label>Moneda</label>
   <select>
    <option value='MXN'>Peso Mexicano</option>
   </select>
  </>
 )
 return [state, setState, Seleccionar]
}

export default useMoneda
