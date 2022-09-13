import React, { useEffect, useState } from 'react'

const Showapi = ({nombreaBuscar}) => {

  const [listaRandM, setListaRandM] = useState([]); // Variable Lista ( Con Info. Get desde API ). Hook useState inicializa Lista con arreglo vacio.

  useEffect(() =>{
    consultaApi(); 
  }, []);


  const consultaApi = async() =>{
       try {
          const url      = 'https://rickandmortyapi.com/api/character/?name=&status=alive' ;
          const response = await fetch(url) ;
          const data     = await response.json();
          console.log(data.results);
          setListaRandM([...listaRandM,...data.results]); // aqui se pasa los valores de data a variable: listaRandM
        } catch (error) {
            console.log(error) ; 
        }
    };
 
    return (
      <div className='row'>
          {listaRandM.filter((l) => {
            if ( l.name.trim().toLocaleLowerCase().includes(nombreaBuscar.trim().toLocaleLowerCase())
            ){
              return l;
          }
          }).map ((l) =>
           <div className='col-lg-3 col-md-3 m-3 card' key={l.id}>
              <img src={l.image} alt={l.name}></img>
              <p>{l.name}</p>
              <p>{l.species}</p>
           </div>
          )}
      </div>
    )
}

export default Showapi