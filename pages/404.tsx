import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Custom404 = () => {
    return (
        <Container className="text-center" style={{ padding: '100px 0' }}>
            <Row>
                <Col>
                    <h1>404 - Page Not Found</h1>
                    <p>Oops! The page you are looking for does not exist.</p>
                    <Link href="/" passHref>
                        <Button variant="primary">Go Back Home</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Custom404;
