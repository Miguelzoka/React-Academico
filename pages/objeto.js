import React from 'react'
import Pagina from '../components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'


const objeto = () => {

    const carros = [
        { marca: 'Chevrolet', modelo: 'Camaro', ano: 2011, cor: 'Vermelho', foto: 'https://www.pastorecc.com.br/site/photos/cars/173/bg_135770285751c49a954af48.JPG' },
        { marca: 'Volkswagen', modelo: 'Gol', ano: 2008, cor: 'Branco', foto: 'https://img.olx.com.br/images/93/934224576084122.jpg' },
        { marca: 'Ford', modelo: 'Tauros', ano: 2004, cor: 'Cinza', foto: 'https://cdn1.mecum.com/auctions/ha0419/ha0419-372110/images/20190205140953-1549401041541@2x.jpg?1554238289000' },
        { marca: 'Volkswagen', modelo: 'Porshe Panamera', ano: 2021, cor: 'Preto', foto: 'https://conteudo.imguol.com.br/c/entretenimento/e2/2022/01/12/porsche-panamera-turbo-s-e-hybrid-1642027483545_v2_4x3.jpg' },
        { marca: 'Jeep', modelo: 'Renegade', ano: 2021, cor: 'Branco', foto: 'https://cdn.motor1.com/images/mgl/6ZpzzE/s3/jeep-renegade-longitude-1.8-80-years.jpg' },
        { marca: 'Renault', modelo: 'Sandero', ano: 2021, cor: 'Branco', foto: 'https://cdn.motor1.com/images/mgl/nRVJl/s1/novo-renault-sandero-2021---projecao.jpg' },
    ]

    return (
        <Pagina titulo="Objetos">

            <Row md={4}>
                {carros.map(item => (
                    <Col className='mt-3'>
                        <Card>
                            <Card.Img variant="top" src={item.foto} />
                            <Card.Body>
                                <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                                <Card.Text>Ano: <strong>{item.ano}</strong></Card.Text>
                                <Card.Text>Cor: <strong>{item.cor}</strong></Card.Text>
                                <Button variant="danger">Detalhes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Pagina>
    )
}

export default objeto
