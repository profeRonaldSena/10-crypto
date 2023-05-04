import { useState } from 'react'

const useMoneda = (label, stateInitial, MONEDAS) => {
 // useState
 const [state, setState] = useState(stateInitial)
 const Seleccionar = () => (
  <>
   <label>Moneda</label>
   <select>
    <option value=''>- Seleccione -</option>
    {MONEDAS.map((MONEDA) => (
     <option key={MONEDA.codigo} value={MONEDA.codigo}>
      {MONEDA.nombre}
     </option>
    ))}
   </select>
  </>
 )
 return [state, setState, Seleccionar]
}

export default useMoneda
