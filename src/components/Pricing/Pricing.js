import React from "react";
import "../../App.css";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCreditCard, FaCheck } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

class Pricing extends React.Component {
  render() {
    return (
      <div className="maincontainer" id="pricing">
        <section>
          <Container className="py-5">
            <header className="text-center mb-0 text-white">
              <Row>
                <Col lg={8} className="mx-auto text-center">
                  <h1 className="text-body">Inversión</h1>
                  <p className="fw-bold text-success">
                    PayPal • Western Union
                    {/* <br /> */}
                    {/* <a href="#" className="text-reset">
                      Link
                    </a> */}
                  </p>
                </Col>
              </Row>
            </header>

            <Row className="text-center align-items-star justify-content-center">
              <Col lg={4} className="m-0 p-4 animation">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase fw-bold mb-4">2x de</h1>
                  <h2 className="h1 fw-bold">
                    $150
                    <span className="text-small fw-normal ms-1">dólares</span>
                  </h2>

                  <ul className="list-unstyled my-4 fs-6 text-left ">
                    <li className="mb-3">
                      <FaCreditCard className="mr-2" /> $150 para inscripción
                    </li>
                    <li className="mb-3  font-weight-normal">
                      <FaCreditCard className="mr-2 text-dark" /> $150 al final
                      de curso
                    </li>
                  </ul>
                  <div className="custom-separator my-2 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-5 fs-6 text-start">
                    <li className="mb-3 ">
                      <FaCheck className="me-2 text-dark" />
                      100% en línea
                    </li>
                    <li className="mb-3">
                      <FaCheck className="me-2 text-dark" />
                      clases en vivo por Zoom
                    </li>
                    <li className="mb-3">
                      <FaCheck className="me-2 text-dark" />7 clases
                    </li>

                    <li className="mb-3">
                      <FaCheck className="me-2 text-dark" />
                      certificado de 21 horas
                    </li>
                  </ul>
                  <div className="d-grid w-100 text-center m-auto">
                    <a
                      href="https://landing.mailerlite.com/webforms/landing/e4l9z9"
                      target="_blank"
                      rel="noreferrer"
                      className="fw-bold btn btn-success font-weight-bold btn-block p-2 shadow rounded-pill"
                    >
                      Inscríbete
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Pricing;
