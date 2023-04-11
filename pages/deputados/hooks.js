import React from 'react'
import Pagina from '../../components/Pagina'
import { useState } from 'react'
import { useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'

const hooks = () => {

    const [deputados, setDeputados] = useState([])

    useEffect(()=>{

        apiDeputados.get('/deputados').then(resultado=>{
            setDeputados(resultado.data.dados)
        })

    }, [])

  return (
   <Pagina titulo="Deputados"> 
        {deputados.map(item=>(
            <p>{item.nome}</p>
        ))}
   </Pagina>
  )
}

export default hooks