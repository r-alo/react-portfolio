import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav'>
            <Container>
                    <a href="/" id="logo"><h1>Kevin Ralo</h1></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                        <nav>
                            <ul>
                                <li><a href="/home">About Me</a></li>
                                <li><a href="/home/projects"> Portfolio</a></li>
                                <li><a href="/home/contact"> Contact</a></li>
                            </ul>
                        </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
