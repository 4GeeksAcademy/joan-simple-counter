import { useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";

export const ContadorSegundos = () => {
    const [segundos, setSegundos] = useState(0);

    return (
        <>
            <Container style={{ display: "flex"}}>
                {String(segundos)
                    .split("")
                    .map((digito) => {
                        return (
                            <h1>
                                <Badge bg="dark">{digito}</Badge>
                            </h1>
                        );
                    })}
            </Container>
            <Container>
                <Button variant="secondary" className="me-2" onClick={() => setSegundos(segundos + 1)}>+1</Button>
                <Button variant="secondary" onClick={() => setSegundos(segundos - 1)}>-1</Button>
            </Container>
        </>
    );
};