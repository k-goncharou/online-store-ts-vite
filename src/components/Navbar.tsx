import {Nav, Navbar as NavbarBs, NavLink} from "react-bootstrap";

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">

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


        </NavbarBs>
    )
}