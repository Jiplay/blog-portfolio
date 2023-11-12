import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className='title'>Écrits d'un Globe-Trotter Créatif</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link href="/Julien">ProfileType</Nav.Link> */}
          <Nav.Link href="/">CV</Nav.Link>
          {/* <Nav.Link href="/articles/test">Articles</Nav.Link>
          <NavDropdown title="Sections" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Films</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Livres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Voyages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Divers
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="/articles">Derniers Articles</Nav.Link>
            <Nav.Link href="#pricing">Projets des copains</Nav.Link>
            <NavDropdown title="Sections" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Films</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Livres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Voyages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Divers
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/login">Espace personel</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="/julien">Espace de Julien</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;