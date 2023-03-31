import React from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"

const Pagina = () => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary text-white py-3 text-center">
        <h1>Página Inicial</h1>
      </div>
      <Rodape/>
    </>
  )
}

export default Pagina
