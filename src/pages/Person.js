import React from 'react';
import AppNavbar from "../partials/AppNavbar";
import Container from "react-bootstrap/Container";

export default function Person() {
    return (
        <div>
            <header>
                <AppNavbar/>
            </header>
            <main>
                <div>
                    <Container>
                        Person Page
                    </Container>
                </div>
            </main>
        </div>
    )
}