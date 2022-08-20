import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

function Portfolio () {
    const projects = [
        {
            id: "1",
            title: "Weather Dashboard",
            technologies: "OpenWeather, JavaScript",
            link: "https://github.com/r-alo/simple-weather-dashboard"
        },
        {
            id: "2",
            title: "NurseXpress",
            technologies: "Handlebars, SASS, Express.JS, Node.JS",
            link: "https://github.com/r-alo/NurseXpress"
        },
        {
            id: "3",
            title: "README Generator",
            technologies: "Node.JS, InquirerJS",
            link: "https://github.com/r-alo/readme-generator"
        },
        {
            id:"4",
            title: "Dev Connect",
            technologies: "React, MUI, Apollo, GraphQL, MongoDB",
            link: "https://github.com/r-alo/dev-connect"
        },
        {
            id:"5",
            title: "Note Taker",
            technologies: "Express.JS, Node.JS",
            link: "https://github.com/r-alo/note-taker"
        }, 
        {
            id:"6",
            title: "Password Generator",
            technologies: "JavaScript",
            link: "https://github.com/r-alo/password-generator"
        }
    ]

    return (
        <Container className='container'>
        <Row xs={ 1 } md={ 2 } className="g-4">
            { projects.map((project) => (
                <Col>
                    <a href={`${project.link}`} className='no-link'>
                    <Card>
                        <Card.Body>
                            <Card.Text>{`${project.title}` || 'Project' }</Card.Text>
                            <Card.Title>{ `${project.technologies}` || 'Project' } </Card.Title>
                        </Card.Body>
                    </Card>
                    </a>
                </Col>
            )) }
        </Row>
        </Container>
    );
}

export default Portfolio;