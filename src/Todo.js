import React, { useState, useRef, useEffect } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () =>
{
    const [ count, setCount ] = useState( 0 );
    const [ name, setName ] = useState( '' );
    const renderCount = useRef( 1 );
    const inputRef = useRef();

    useEffect( () =>
    {
        renderCount.current = renderCount.current + 1;
    } );
    return (
        <Container>
            <p className="render">Render Count: {renderCount.current}</p>
            <Form>
                <Form.Label className="inputTextLabel">Controlled Input</Form.Label>
                <Form.Control type="text" ref={inputRef} value={name} onChange={( e ) =>
                {
                    setName( e.target.value );
                }} ></Form.Control>
                <Form.Text className="text-muted form-container">You typed... {name}</Form.Text>
                <Form.Text className="text-muted form-container">The counter value is {count}</Form.Text>
                <div className="d-flex form-container">
                    <Row className="">
                        <Col>
                            <Button variant="secondary" onClick={() => { setCount( count - 1 ) }}>Decrease</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => { setCount( 0 ) }}>Reset</Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={() => { setCount( count + 1 ) }}>Increase</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}
export default Todo; 