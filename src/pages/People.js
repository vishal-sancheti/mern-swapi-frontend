import React from 'react';
import AppNavbar from "../partials/AppNavbar";
import Container from "react-bootstrap/Container";

export default function People() {
    return (
        <div>
            <header>
                <AppNavbar/>
            </header>
            <main>
                <div>
                    <Container>
                        People Page
                    </Container>
                </div>
            </main>
        </div>
    )
}