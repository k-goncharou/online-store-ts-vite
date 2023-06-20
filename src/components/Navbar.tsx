import {Button, Container, Nav, Navbar as NavbarBs, NavLink} from "react-bootstrap";

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" as={NavLink}>
                        Home
                    </NavLink>

                    <NavLink to="/store" as={NavLink}>
                        Store
                    </NavLink>

                    <NavLink to="/contacts" as={NavLink}>
                        Contacts
                    </NavLink>
                </Nav>
                <Button className="rounded-circle"
                        variant="outline-primary"
                        style={{
                            width: "3rem",
                            height: "3rem",
                            position: "relative"
                        }}>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-content-enter"
                         style={{
                             width: "1.5rem",
                             height: "1.5rem",
                             position: "absolute",
                             bottom: 0,
                             right: 0,
                             transform: "translate(20%,20%)"
                         }}>
1
                    </div>
                </Button>
                Cart
            </Container>

        </NavbarBs>
    )
}