import { Image, Card } from 'react-bootstrap';
import {FcApproval} from "react-icons/fc";
import React from "react";
import AuthorProfileType from "../interfaces/authorProfileType";
import ReactMarkdown from 'react-markdown';

type Props = {
    authorData: AuthorProfileType
}

function AuthorProfile({authorData}: Props) {
    const profilePictureURL = `../assets/pictures/${authorData.ID}.png`
    return (
        <div>
            <Image
                src={profilePictureURL}
                roundedCircle
                style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    position: "relative",
                    top: "-75px",
                    marginLeft: "75px",
                    border: "3px solid white",
                    boxShadow: "0 0 0 3px white"
                }}                alt="Profile Picture"
            />
            <Card style={{top:"-35px"}}>
                <Card.Body>
                    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
                        {authorData.Name}
                    </Card.Title>
                        {/*{authorData.Name} <FcApproval style={{ marginLeft: '8px' }} />*/}
                    <Card.Subtitle className="mb-2 text-muted">{authorData.Job}</Card.Subtitle>
                    {authorData.Description.map((desc, index) => (
                        <Card.Text key={index}>
                            {desc}
                        </Card.Text>
                    ))}
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
                        {authorData.SecondaryCard.Title}
                    </Card.Title>
                    {authorData.SecondaryCard.Content.map((desc, index) => (
                        <Card.Text key={index}>
                            <ReactMarkdown>
                                {desc}
                            </ReactMarkdown>
                        </Card.Text>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}

export default AuthorProfile;