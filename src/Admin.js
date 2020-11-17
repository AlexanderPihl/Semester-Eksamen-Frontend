import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import { URLQuotes } from "./settings";
import logo from './bBad.jpeg';

const AllQuotes = () => {

    const init = { QuoteNum: "" }
    const [quotes, setQuotes] = useState([]);
    const [num, setNum] = useState();

    const fetchRandomQuote = () => {
        fetch(URLQuotes)
            .then(res => res.json())
            .then(data => {
                setQuotes(data);
            })
    }

    //loads random quote first time
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchQuote = () => {
        const URL = URLQuotes + "/" + num;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data);
            });
    };

    const getNumberOfQuotes = (evt) => {
        evt.preventDefault();
        fetchQuote();
    };

    const onChange = (evt) => {
        evt.preventDefault();
        const num = evt.target.value;
        setNum(num);
    };

    return (
        <div>

            <Container>
                <h2>Quotes from Breaking Bad</h2>
                <Row className="mt-4">
                    <img src={logo} />
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Quote</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    quotes.map(element => {
                                        return (
                                            <tr>
                                                <td>{element.author}</td>
                                                <td>{element.quote}</td>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onChange={onChange} className="mt-4" label="">
                            <Form.Control
                                type="text"
                                id="QuoteNum"
                                placeholder="Input number of quotes you want"
                            />
                            <Button onClick={getNumberOfQuotes} variant="primary" type="submit">
                                Get quotes
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}


export default AllQuotes;