import Header from '../../components/header'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import React, { useState, useEffect } from 'react';

import { Container, Row, Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthorProfile from "../../components/authorProfile";
import AuthorTabs from "../../components/authorTabs";
import authorProfileType from "../../interfaces/authorProfileType";

type Props = {
    name: string
    preview?: boolean
}

export default function Index({ preview, name }: Props) {
    const router = useRouter();
    const { author } = router.query;
    const [data, setData] = useState<authorProfileType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (author !== undefined) {
            fetch(`/authors/${author}/${author}.json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                    router.push('/404');
                });
        }
    }, [author, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Layout preview={preview}>
            <Header/>
            <Head>
                <title>{`JG-Blog`}</title>
            </Head>
            <Container fluid style={{marginTop:'-50px'}}>
                <Row>
                    <Image
                        src="/authors/Julien/banner.png"
                        style={{ width: "100%", height: "auto", display: "block" }}
                        alt="Banner"
                    />
                </Row>
                <Row style={{backgroundColor:"rgb(240, 240, 240)", height:"100vh"}}>
                    <Col xs={4} style={{}}>
                        <AuthorProfile  authorData={data}/>
                    </Col>
                    <Col xs={8}>
                        <AuthorTabs authorData={data}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}