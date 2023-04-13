import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">Products App</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Purchases">Purchases</Nav.Link>
            <Nav.Link>Purchases (sidebar)</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;


