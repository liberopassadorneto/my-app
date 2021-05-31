import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

export const ThankYou = () => {
  return (
    <>
      <Jumbotron fluid className="text-center my-5">
        <Container>
          <h1>¡Gracias!</h1>
          <p className="lead">
            <strong>Su inscripción en el curso fue un éxito.</strong>
          </p>
          <hr></hr>
          <p>¿Alguna duda?</p>
          <p>
            <Button
              href="https://wa.me/message/IEEROQ7R4KO2J1
"
              variant="success"
              className="my-2"
            >
              Hablar por WhatsApp
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};
