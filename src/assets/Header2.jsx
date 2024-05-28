import Nav from 'react-bootstrap/Nav';

const Header2 = () => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: 'darkgreen' }}>Explore</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" style={{ color: 'darkgreen' }}>Sell/Trade</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'darkgreen' }}>Finance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" style={{ color: 'darkgreen' }}>Rent</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'darkgreen' }}>Services</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header2;