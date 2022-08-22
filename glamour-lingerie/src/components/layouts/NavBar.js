
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
        <>
         <Navbar className='navBg' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/' >GLAMOUR LINGERIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link  as={Link} to='/about'>about</Nav.Link>
            <Nav.Link  as={Link} to='/contacto' >contacto</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
        </>
    )
}
export default NavBarExample