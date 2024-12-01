import { Container } from "react-bootstrap";
import { ContadorSegundos } from "../components/ContadorSegundos";

export const PaginaContador = () => {
    return (
        <Container>
            <h1>Counter Content</h1>
            <ContadorSegundos/>
        </Container>
    );

};