import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Loja - MaisHardware</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
              <NavDropdown title="Catalago" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Intel
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Memória</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  DDR4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Menu;