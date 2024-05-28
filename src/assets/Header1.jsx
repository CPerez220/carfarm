import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CARFARM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Location</Nav.Link>
            <Nav.Link href="#link">Favorite</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Cars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Notifications
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search by make, model, or keyword"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header1;