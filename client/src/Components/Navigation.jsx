import { Nav, Navbar, Container } from "react-bootstrap";

export const Navigation = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/shifts">Shifts</Nav.Link>
                    <Nav.Link href="/create">Add Shift</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
