import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoPlay } from "react-icons/io5";
import { Container, Row, Col } from "react-bootstrap";

class ServicesNew extends React.Component {
  render() {
    return (
      <div className="maincontainer bg-1" id="content">
        <section>
          <Container className="py-5">
            <header className="text-center mb-5 text-white">
              <Row>
                <Col lg={8} className="mx-auto">
                  <h1 className="text-body">Contenido</h1>
                  <p className="fw-bold text-success">
                    7 clases en línea
                    {/* <br /> */}
                    {/* <a href="#" className="text-reset">
                      Link
                    </a> */}
                  </p>
                </Col>
              </Row>
            </header>

            <Row className="text-center align-items-star justify-content-center my-sm-0">
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-4">
                <div className="bg-white p-5 rounded-lg shadow animation max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4 ">13/06</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 1
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Ventajas y Aplicaciones de la Ortodoncia Lingual
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Sistema Lingual Arco-Reto
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Agulación y Torque de los Brackets
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-5">
                <div className="bg-white p-5 rounded-lg shadow animation max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">20/06</h1>
                  <h2 className="h1">
                    Clase 2
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Perfil de los Brackets
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Sistemas de Montaje de Laboratorio
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Prieto Six Plus
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-5">
                <div className="bg-white p-5 rounded-lg shadow animation max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">27/06</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 3
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Confección de la Cubeta de Transferencia
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Pegado de los Brackets en la Boca
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Ligación del Primer Arco
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="my-lg-4 my-md-0 my-sm-0 text-center align-items-star justify-content-center ">
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-5">
                <div className="text-center card-class bg-white p-5 rounded-lg shadow animation  max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">04/07</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 4
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Instrumentales en Ortodoncia Lingual
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Diagrama Lingual Prieto y Arcos Linguales
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Secuencia de los Arcos
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-5">
                <div className="bg-white p-5 rounded-lg shadow animation max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">11/07</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 5
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Casos Clínicos a Respecto de los Diagramas
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Nivelamiento y Alineamiento
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Controle de Curvas de Spee en los Arcos
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} mb-lg-0 mb-5>
                <div className="bg-white p-5 rounded-lg shadow animation max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">18/07</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 6
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Cuando no pegar Brackets Anteriores al Principio del
                      Tratamiento
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Presentación de Casos Clínicos
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Repegado de Brackets
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="my-lg-4 my-md-0 my-sm-5 text-center align-items-star justify-content-start my-4">
              <Col lg={4} md={6} sm={12} className="mb-lg-0 mb-5">
                <div className="text-center card-class bg-white p-5 rounded-lg shadow animation  max-height">
                  <h1 className="h6 text-uppercase fw-bold mb-4">25/07</h1>
                  <h2 className="h1 font-weight-bold">
                    Clase 7
                    <span className="text-small font-weight-normal ml-2"></span>
                  </h2>

                  <div className="custom-separator my-3 mx-auto bg-success"></div>
                  <ul className="list-unstyled my-4 fs-6 text-start">
                    <li className="mb-3 text-medium">
                      <IoPlay className="me-2  text-dark" />
                      Confección de Botones Estéticos
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Conjugados / Binário / Ligaduras de Scott
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Confeccionar arcos .014 “Acero y 0.16” Acero con Omegas
                    </li>
                    <li className="mb-3">
                      <IoPlay className="me-2 text-dark" />
                      Biomecánica Básica
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default ServicesNew;
