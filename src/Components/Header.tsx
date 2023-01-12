import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import shoe from '../assets/vans.png'
import './Header.css'

function Header() {
  return (
    <Navbar bg="dark"  expand="lg">
      <Container >
        <Navbar.Brand href="#home">
          <a href="/"><img className='img-nav' src={shoe} alt="" /></a>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='right-aligned' id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><a href="">Home</a></Nav.Link>
            <Nav.Link href="#link"><a href="">Sobre</a></Nav.Link>
            <Nav.Link href="#link"><a href="">Contatos</a></Nav.Link>
            <Nav.Link href="#link"><a href="">Onde nos encontrar</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;