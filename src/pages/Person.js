import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import AppNavbar from "../partials/AppNavbar";
import Container from "react-bootstrap/Container";
import peopleService from "../services/peopleService";
import {Col, Row, Table} from "react-bootstrap";

export default function Person() {
    const params = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        peopleService.get(params.id).then(res => {
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
                    <Container>
                        <Row>
                            <Col>
                                <h1>Person form Star Wars</h1>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md="8" className="mx-auto">
                                {data &&
                                <div>
                                    <h4>Personal Details</h4>
                                    <Table striped bordered>
                                        <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{data.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Height</th>
                                            <td>{data.height}</td>
                                        </tr>
                                        <tr>
                                            <th>Mass</th>
                                            <td>{data.mass}</td>
                                        </tr>
                                        <tr>
                                            <th>Hair Color</th>
                                            <td>{data.hair_color}</td>
                                        </tr>
                                        <tr>
                                            <th>Skin Color</th>
                                            <td>{data.skin_color}</td>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <td>{data.gender}</td>
                                        </tr>
                                        <tr>
                                            <th>Birth year</th>
                                            <td>{data.birth_year}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <h4>Species</h4>
                                    <Table striped bordered>
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Average Lifespan</th>
                                            <th>Classification</th>
                                            <th>Language</th>
                                        </tr>
                                        </thead>
                                    </Table>
                                    <h4>Films</h4>
                                    <Table striped bordered>
                                        <thead>
                                        <tr>
                                            <th>Tile</th>
                                            <th>Director</th>
                                            <th>Producers</th>
                                            <th>Release Date</th>
                                        </tr>
                                        </thead>
                                    </Table>
                                    <h4>Home Planet</h4>
                                    <Table striped bordered>
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Terrain</th>
                                            <th>Population</th>
                                        </tr>
                                        </thead>
                                    </Table>
                                </div>
                                }
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </div>
    )
}