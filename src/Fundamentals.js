import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer ( state, action )
{
    switch ( action.type )
    {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }

}

const Fundamentals = () =>
{
    const [ count, setCount ] = useState( 0 );
    const [ name, setName ] = useState( '' );
    const renderCount = useRef( 1 );
    const inputRef = useRef();
    const [ state, dispatch ] = useReducer( reducer, { count: 0 } );

    function increment ()
    {
        dispatch( { type: ACTIONS.INCREMENT } );
    }

    function decrement ()
    {
        dispatch( { type: ACTIONS.DECREMENT } );
    }

    function reset ()
    {
        return state.count === 0;
    }

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
                <Form.Text className="text-muted form-container">You typed... <h5>{name}</h5></Form.Text>
                <h4 className="center">Counter using State</h4>
                <Form.Text className="text-muted form-container">The counter value is <b>{count}</b></Form.Text>
                <div className="d-flex form-container justify-content-center">
                    <Row className="">
                        <Col>
                            <Button variant="secondary" onClick={() => { setCount( count - 1 ) }}>Decrease</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => { setCount( 0 ) }}>Reset</Button>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={() => { setCount( count + 1 ) }}>Increase</Button>
                        </Col>
                    </Row>
                </div>
                <br />
                <h4 className="center">Counter using useReducer</h4>
                <Form.Text className="text-muted form-container">The counter value is <b>{state.count}</b></Form.Text>
                <div className="d-flex form-container justify-content-center">
                    <Row className="">
                        <Col>
                            <Button variant="secondary" onClick={decrement}>Decrease</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={reset}>Reset</Button>
                        </Col>
                        <Col>
                            <Button variant="primary" onClick={increment}>Increase</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}
export default Fundamentals; 