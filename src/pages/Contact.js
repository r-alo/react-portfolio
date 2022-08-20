import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function Contact () {
    return (
        <Container>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="text" placeholder="Name" validated />
                <br/>
                <Form.Control type="email" placeholder="Email" />
                <br/>
                <Form.Control type="number" placeholder="Phone Number" />
                <br />
                <Form.Control as="textarea" placeholder="Thoughts?"
                            style={ { height: '100px' } }
                        />
            </Form.Group>
            <Button variant="outline-primary" type="submit" className='button'>
                Submit
            </Button>
        </Form>
        </Container>
    );
}

export default Contact;