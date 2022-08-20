import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

function Portfolio () {
    const projects = [
        {
            title: "Weather Dashboard",
            technologies: "OpenWeather, JavaScript",
            link: ""
        },
        {
            title: "NurseXpress",
            technologies: "Handlebars, SASS",
            link: ""
        },
        {
            title: "README Generator",
            technologies: "Node.JS, InquirerJS",
            link: ""
        }
    ]

    return (
        <Container className='container'>
        <Row xs={ 1 } md={ 2 } className="g-4">
            { Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>Project</Card.Text>
                            <Card.Title>Technologies </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            )) }
        </Row>
        </Container>
    );
}

export default Portfolio;