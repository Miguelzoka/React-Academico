import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const pagina2 = () => {
  return (
    <>
    <Cabecalho/>
      <div className='bg-secondary text-white py-3 text-center'>
        <h1>Página 2</h1>
      </div>
      <Container>
        <h1>Página 2</h1>
      <Rodape/>
      </Container>
    </>
  )
}

export default pagina2