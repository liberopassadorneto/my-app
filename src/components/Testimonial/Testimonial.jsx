import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Flags from "country-flag-icons/react/3x2";

function Testimonial() {
  return (
    <>
      <div
        className="justify-content-center align-items-center maincontainer"
        id="testimonials"
      >
        <section>
          <Container className="mt-5 mb-0">
            <header className="text-center mb-0 text-white">
              <Row>
                <Col lg={8} className="mx-auto text-center">
                  <h1 className="text-body">Testimonios de estudiantes</h1>
                  <p className="fw-bold text-success">
                    {/* <br /> */}
                    {/* <a href="#" className="text-reset">
                      Link
                    </a> */}
                    <Row className="text-center justify-content-center text-align-center">
                      <Flags.EC
                        title="Ecuador"
                        style={{ width: "48px", height: "auto" }}
                      />
                      <Flags.BO
                        title="Bolivia"
                        style={{ width: "48px", height: "auto" }}
                      />
                      <Flags.MX
                        title="Mexico"
                        style={{ width: "48px", height: "auto" }}
                      />
                      <Flags.PE
                        title="Peru"
                        style={{ width: "48px", height: "auto" }}
                      />
                    </Row>
                  </p>
                </Col>
              </Row>
            </header>
            <Row className="text-center align-items-star justify-content-start">
              <Col lg={6} className="m-0 p-4 animation">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/SeOhX1ezzvs"
                    title="Dr Carlos Rueda"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col lg={6} className="m-0 p-4 animation">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/RkYPPjGtwGI"
                    title="Dr Andrés"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col lg={6} className="m-0 p-4 animation">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/gP25COeY2Nk"
                    title="Dra Daniela Guerrero"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col lg={6} className="m-0 p-4 animation">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/n3dux3IKTfg"
                    title="Dr Tommy"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Testimonial;
