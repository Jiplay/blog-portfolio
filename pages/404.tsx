import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const Custom404 = () => {
    return (
        <Container className="text-center" style={{padding: '100px 0'}}>
            <Row>
                <Col>
                    <h1>404 - Page Not Found</h1>
                    <div style={{alignItems: 'center', justifyContent: 'center', display: "flex"}}>
                        <Image src={"/assets/404.svg"}  alt={"404"} width={400} height={400}/>
                    </div>
                    <Link href="/" passHref>
                        <Button variant="primary">Go Back Home</Button>
                    </Link>
                </Col>
            </Row>
            <a href="https://storyset.com/online">Online illustrations by Storyset</a>
        </Container>
    );
};

export default Custom404;
