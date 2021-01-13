import { FC } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Header: FC = () => {
  return (
    <Container className="mb-3">
      <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Brand href="/">Legendary Enigma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
