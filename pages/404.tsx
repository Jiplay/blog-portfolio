import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Custom404 = () => {
    return (
        <Container fluid className="text-center" style={{ padding: '0', height: '100vh' }}>
            <Row className="h-100">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ position: 'absolute', width: '80%', height: '80%' }}>
                            <Image src={"/assets/404.svg"} alt={"404"} fill style={{ objectFit: 'contain' }} />
                        </div>
                    </div>
                    <Link href="/" passHref>
                        <Button variant="primary" style={{ marginTop: '20px', zIndex: 1 }}>Go Back Home</Button>
                    </Link>
                    <a href="https://storyset.com/online" style={{ marginTop: '20px', zIndex: 1 }}>Online illustrations by Storyset</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Custom404;
