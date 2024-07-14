import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import styles from './style/work.module.css'
import ReactMarkdown from "react-markdown";
import React from "react";
type Props = {
    workData: { Title: string; Text: string; Badge: {Color: string, Text: string;} }[];
}

function WorkSection({workData}: Props) {
    return (
        <Accordion defaultActiveKey={['0']} >
            {workData.map((value, index) => (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{value.Title}<Badge  pill className={styles.customBadge}> {value.Badge.Text} </Badge> </Accordion.Header>
                        <Accordion.Body>
                            <ReactMarkdown>
                                {value.Text}
                            </ReactMarkdown>
                        </Accordion.Body>
                    </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default WorkSection;