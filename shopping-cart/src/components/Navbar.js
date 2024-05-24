import{Button, Container, Navbar,Modal} from 'react-bootstrap'

function NavbarComponent() {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <button>Car 0 Items</button>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavbarComponent;