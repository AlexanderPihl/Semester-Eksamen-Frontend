import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import { URLQuotes } from "./settings";
import logo from './bBad.jpeg';

const AllQuotes = () => {

    const init = { QuoteNum: "" }
    const [quote, setQuote] = useState(init);

    const fetchAllQuotes = () => {
        fetch(URLQuotes)
            .then(res => res.json())
            .then(data => {
                setQuote(data[0]);
            })
    }

    //loads quote first time
    useEffect(() => {
        fetchAllQuotes();
    }, []);

    const fetchQuote = (quote) => {
        const URL = URLQuotes + "/" + quote;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setQuote(data);
            });
    };

    const getQuote = (evt) => {
        evt.preventDefault();
        fetchQuote(quote);

        console.log(quote)
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        const num = evt.target.value;
        setQuote(num);
        console.log(num)

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
                                <tr>
                                    <td>{quote.author}</td>
                                    <td>{quote.quote}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="primary mt-3" onClick={() => fetchAllQuotes()}>Get new quote</Button>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <br></br>
                    <p>
                        The code for "Get quote(s)" was me trying to implement af table of a number of quotes decided by the user.
                        <br></br>
                        I didnt manage to get it to work because of my JSON objects are indside an array and therefore i
                        <br></br>
                        could not get map to work properly in time for hand in...
                        <br></br>
                        I can get them all by stringify them
                    </p>
                    <Col>
                        <p>
                            <td>{JSON.stringify(quote)}</td>
                            {
                                quote.tags && quote.tags.map(element =>
                                    <tbody key={element.url}>
                                        <tr><th>url:</th><td>{element.quote}</td></tr>
                                        <tr><th>divCount:</th><td>{element.author}</td></tr>
                                        <tr><td colSpan="2">&nbsp;</td></tr>

                                    </tbody>
                                )}
                        </p>
                        <Form onChange={onSubmit} className="mt-4" label="">
                            <Form.Control
                                type="text"
                                id="QuoteNum"
                                placeholder="please enter a number"
                            />
                            <Button onClick={getQuote} variant="primary" type="submit">
                                Get quote(s)
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}


export default AllQuotes;