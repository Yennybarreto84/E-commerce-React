//import Container from 'react-bootstrap/Container';//import {Row}  from 'react-bootstrap';
//import {Col}  from  "react-boostrap";
//import  {Button}  from 'react-bootstrap';
//import {Card} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
const Home = () => {
    const products = useSelector( state => state.products )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( getProductsThunk() )
    }, [] )

    return (
        <div>
           <Container>
                <Row xs={1} md={2} lg={3} className="py-3">
                    {
                        products?.map( item => (
                            <Col className="mb-3" key={ item.id }>
                                <Card>
                                    <Card.Img variant="top" src={ item.images[0]?.url } />
                                    <Card style={{ width: '18rem' }} />
                                    <Card.Body>
                                        <Card.Title>{ item.title }</Card.Title>
                                        <Card.Text>
                                            { item.description }
                                        </Card.Text>
                                        <Button variant="primary">Ver detalle</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                    
                </Row>
           </Container>
        </div>
    );
}

export default Home;