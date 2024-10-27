import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import authorProfileType from "../../interfaces/authorProfileType";
import ProfileView from "../../components/RecapProfile";
import NavBar from "../../components/navBar";

type Props = {
    name: string
    preview?: boolean
}

export default function Index({ preview, name }: Props) {
    const router = useRouter();
    const { author } = router.query;
    const [authorData, setData] = useState<authorProfileType | null>(null);
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
        <Layout preview={preview} footer={true}>
            <Head>
                <title>{`JG-Blog`}</title>
            </Head>
            <Container>
                <NavBar/>
                <div className={"mb-10 mt-10"}>
                    <ProfileView authorData={authorData} />
                </div>
            </Container>
        </Layout>
    )
}