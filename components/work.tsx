import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

type Props = {
    workData: { Title: string; Text: string; Badge: {Color: string, Text: string;} }[];
}

function WorkSection({workData}: Props) {
    return (
        <Accordion defaultActiveKey={['0']} >
            {workData.map((value, index) => (
                    <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>{value.Title}<Badge pill bg={value.Badge.Color} className="ms-3"> {value.Badge.Text} </Badge> </Accordion.Header>
                        <Accordion.Body>
                            {value.Text}
                        </Accordion.Body>
                    </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default WorkSection;