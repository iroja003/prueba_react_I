import React from 'react'

const Formulario = ({setNombreaBuscar}) => {
     
  return (
    <>
        <form>
            <label>Personaje a Buscar</label><br></br> 
            <input 
                type='text'
                placeholder='Ingrese personaje a buscar'
                className='from-control-mb-2' 
                onChange={(e) => setNombreaBuscar(e.target.value)}
            />
        </form>
    </>
  )
}

export default Formulario