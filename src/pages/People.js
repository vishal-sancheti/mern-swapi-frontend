import React, { useEffect, useState } from 'react';
import {Container, Card, Row, Col} from "react-bootstrap";

import AppNavbar from "../partials/AppNavbar";
import peopleService from '../services/peopleService'

export default function People() {
    const [data, setData] = useState(null);
    useEffect(() => {
        peopleService.list().then(res => {
            console.log(res.message);
            if(res.success){
                setData(res.data);
            }
        });
    },[]);
    return (
        <div>
            <header>
                <AppNavbar/>
            </header>
            <main>
                <div>
                    <Container className="py-3">
                        <Row>
                            <Col>
                                <h1>People form Star Wars</h1>
                            </Col>
                        </Row>
                        <Row>
                            {data && data.results.map(function(result,index){
                                return(
                                    <Col md={3}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <Card.Title>{result.name}</Card.Title>
                                                <Card.Link href={result.url}>View More</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </main>
        </div>
    )
}