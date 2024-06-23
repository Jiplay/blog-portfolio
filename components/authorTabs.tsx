import { Tabs, Tab } from 'react-bootstrap';
import React from "react";
import WorkSection from "./work";
import AuthorProfileType from "../interfaces/authorProfileType";

type Props = {
    authorData: AuthorProfileType
}

function AuthorTabs({authorData}: Props) {
    return (
        <div>
            <Tabs
                style={{marginTop:'25px'}}
                defaultActiveKey="work"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="work" title="Work">
                    <WorkSection workData={authorData.WorkData} />
                </Tab>
                <Tab eventKey="profile" title="Blog">
                    Tab content for Blog
                </Tab>
                <Tab eventKey="photo" title="Photo">
                    Tab content for Photo
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
            );
}

export default AuthorTabs;