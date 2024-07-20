import React from "react";
import Image from "next/image";
import { Card } from 'react-bootstrap';

type Props = {
    projectsData: { Title: string, Text: string, Image: string, Redirect: string }[],
}

function AuthorProjectTab({projectsData}: Props) {
    const redirect = (url: string) => {
        window.location.href = url;
    }
    return (
        <div>
            {projectsData.map((project, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: "pointer" }}
                     onClick={() => redirect(project.Redirect)}>
                    <Image src={project.Image} alt={project.Title} width={200} height={200} style={{ marginRight: '20px', borderRadius: "10px" }} />
                    <div>
                        <Card.Title>{project.Title}</Card.Title>
                        <p className="mb-2 text-muted">{project.Text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AuthorProjectTab;