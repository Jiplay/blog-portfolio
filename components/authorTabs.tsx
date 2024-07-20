import { Tabs, Tab } from 'react-bootstrap';
import React from "react";
import WorkSection from "./work";
import AuthorProfileType from "../interfaces/authorProfileType";
import AuthorProjectTab from "./AuthorProjectTab";
import AuthorContactTab from "./AuthorContactTab";

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
                <Tab eventKey="projects" title="Projects">
                    <AuthorProjectTab projectsData={authorData.ProjectsData} />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <AuthorContactTab contactData={authorData.ContactData} />
                </Tab>
                {/*<Tab eventKey="photo" title="Photo" disabled>*/}
                {/*    Tab content for Photo*/}
                {/*</Tab>*/}
            </Tabs>
        </div>
            );
}

export default AuthorTabs;