import{Button, Container, Navbar,Modal} from 'react-bootstrap'

function NavbarComponent() {

    return(
        <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <button>Cart 0 Items</button>
                    </Navbar.Collapse>
            
        </Navbar>
    )
}


export default NavbarComponent;