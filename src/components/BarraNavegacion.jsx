import { Container, Nav, Navbar } from "react-bootstrap";

export const BarraNavegacion = ({ paginaActual, setPagina }) => {
    const mapearLink = ["Landing", "Counter"];

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => setPagina("Landing")}>
                        Simple Counter
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {mapearLink.map((link) => {
                            return (
                                <Nav.Link
                                    active={link === paginaActual}
                                    onClick={() => setPagina(link)}
                                >
                                    {link}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};