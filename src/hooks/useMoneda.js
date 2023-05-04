import { useState } from 'react'

const useMoneda = () => {
 // useState
 const [state, setState] = useState('')
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
