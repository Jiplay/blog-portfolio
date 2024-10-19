import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
      <div>
          <div style={{borderTop: '1px solid white'}}></div>
          <Navbar expand="lg" variant="dark" className="text-white" style={{backgroundColor: 'rgb(28, 29, 32)'}}>
              <Container>
                  <Navbar.Brand href="#home">Home</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#activity">Activity</Nav.Link>
                          <Nav.Link href="#Lab">The lab</Nav.Link>
                          <Nav.Link href="#Me">Me</Nav.Link>
                          {/*<Nav.Link href="/curious">About this website</Nav.Link>*/}
                          {/*<NavDropdown title="Authors" id="basic-nav-dropdown">*/}
                          {/*    <NavDropdown.Item href="author/Julien">Me</NavDropdown.Item>*/}
                          {/*</NavDropdown>*/}
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          <div style={{borderBottom: '1px solid white', marginBottom:"15px"}}></div>
      </div>
  );
}

export default NavBar;